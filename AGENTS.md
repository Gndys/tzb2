# AGENTS.md

## Purpose

Universal feature-delivery checklist for this monorepo.
Use this file as the default instruction when implementing any new feature, so repeated manual prompts are not required.

## Scope

- Monorepo with dual apps:
  - `apps/next-app` (Next.js)
  - `apps/nuxt-app` (Nuxt.js)
- Shared capability and business logic should be implemented in `libs/*` and `config/*` first, then wired into both apps.

## Golden Rules

1. No hardcoded user-facing strings in pages/components; use i18n keys.
2. Keep Next + Nuxt feature parity unless explicitly requested otherwise.
3. API routes are thin adapters; core logic belongs to shared libraries.
4. Any user-accessed API/page must be checked for auth and permission consistency.
5. If a feature consumes credits/money, ensure charge/refund path and transaction labels are complete.
6. Always finish with typecheck + build verification.
7. A feature is **not done** until E2E tests pass on both apps.

## Development Workflow (Spec First, Code First)

Each feature follows five phases. The key idea: define **what to verify** before coding,
but write the **actual test code** after the UI exists (E2E selectors depend on real DOM).

```
┌─────────┐   ┌─────────┐   ┌──────────┐   ┌─────────┐   ┌─────────┐
│  SPEC   │──▶│  CODE   │──▶│  VERIFY  │──▶│  TEST   │──▶│  GREEN  │
│         │   │         │   │          │   │         │   │         │
│ Define  │   │ Implement│  │ agent-   │   │ Write   │   │ E2E pass│
│ accept- │   │ feature  │  │ browser  │   │ E2E     │   │ both    │
│ ance    │   │ code     │  │ visual   │   │ specs   │   │ apps =  │
│ criteria│   │ (dual    │  │ walkthru │   │ against │   │ DONE    │
│ in plain│   │  app)    │  │          │   │ real UI │   │         │
│ language│   │         │   │          │   │         │   │         │
└─────────┘   └─────────┘   └──────────┘   └─────────┘   └─────────┘
```

### Phase details

| # | Phase | What | Output |
|---|-------|------|--------|
| 1 | **Spec** | Write acceptance scenarios in `tests/e2e/TEST-CATALOG.md` (plain language, no Playwright code). Define what pages/flows to test, what URL params to check, what UI states to verify. | TEST-CATALOG.md entry in backlog |
| 2 | **Code** | Implement the feature following the checklist below (libs → config → both apps → i18n → permissions). | Working feature on both apps |
| 3 | **Verify** | Use `agent-browser` to walk through the key user flows on the running app. Catch visual/UX issues before writing tests. | Visual confirmation |
| 4 | **Test** | Write Playwright E2E specs based on the real DOM structure. Use selectors discovered during the Verify phase. | `tests/e2e/specs/*.spec.ts` |
| 5 | **Green** | Run E2E on both apps (`pnpm test:e2e`). Both pass = feature complete. Record results in TEST-CATALOG.md. | Updated test results table |

### Why not pure BDD (E2E first)?

E2E tests are tightly coupled to DOM structure (`[data-slot="select-trigger"]`, `role="combobox"`,
`.nth(1)`), URL patterns, and i18n text. These are unknowable before the UI exists.
Additionally, Next.js and Nuxt.js render differently — selectors often need framework-specific
handling that only emerges during implementation. Writing E2E first would produce throwaway code.

The BDD **mindset** (think about acceptance criteria first) is preserved in the Spec phase.

### When to run E2E

| Trigger | Scope | Command |
|---------|-------|---------|
| Finished a feature | Related spec files only | `npx playwright test <spec-file>` |
| Before release | Full suite, both apps | Switch app on port 7001, run `pnpm test:e2e` twice |
| Large refactor | Full suite, both apps | Same as above |
| CI (every push) | **No E2E** — typecheck + build only | `pnpm typecheck && pnpm build` |

> E2E is a **local regression net**, not a CI gate. Payment tests need Stripe CLI,
> AI tests need provider API keys, and the full suite takes ~6 min per app.

## New Feature Checklist (Copy/Paste Friendly)

### 0) Requirement framing

- [ ] Confirm feature goal, supported providers/modes, and non-goals.
- [ ] Identify if this is: UI only / API only / full-stack / provider integration.
- [ ] Decide whether both Next and Nuxt need implementation.
- [ ] Write acceptance scenarios in `tests/e2e/TEST-CATALOG.md` (Spec phase).

### 1) Architecture placement

- [ ] Put provider/domain logic in `libs/*` (not duplicated in app routes).
- [ ] Put static options and defaults in `config/*`.
- [ ] Keep app route handlers (`apps/*/api` or `apps/nuxt-app/server/api`) as orchestration only.
- [ ] Reuse existing abstractions before adding new env vars or new config keys.

### 2) API design and consistency

- [ ] Validate request input (required fields, enum/mode constraints, file limits if needed).
- [ ] Normalize provider-specific parameters into a shared options type.
- [ ] Implement failure-safe flow (e.g., task creation + polling + timeout + clear error).
- [ ] Ensure response shape is stable and consistent across Next/Nuxt APIs.
- [ ] Log useful debug context (provider/model/request id) without leaking secrets.

### 3) Permissions and auth

- [ ] Add/verify protected page routes in Next middleware.
- [ ] Add/verify protected API routes in Nuxt permissions middleware.
- [ ] Ensure API has reliable user resolution (`context.user` and/or session fallback).
- [ ] Compare with an existing protected feature (example: image generation) for parity.

### 4) i18n and UI text

- [ ] Add keys in `libs/i18n/locales/en.ts` first (source of truth).
- [ ] Mirror same key structure in `libs/i18n/locales/zh-CN.ts`.
- [ ] Add model names, mode labels, errors, helper texts, and button labels.
- [ ] Verify all new UI texts in both apps use translation keys only.

### 5) Credits and billing safety (if applicable)

- [ ] Define/adjust cost mapping in `config/credits.ts`.
- [ ] Use canonical transaction codes from `libs/credits/utils.ts`.
- [ ] Add `dashboard.credits.descriptions.*` translations for new transaction description codes.
- [ ] Consume credits before execution when needed; refund on provider failure.
- [ ] Include metadata for reconciliation (provider/model/task id/error summary).

### 6) Upload/storage constraints (if applicable)

- [ ] Reuse `libs/storage` upload flow and provider config.
- [ ] Enforce documented constraints (size, mime, dimensions, count).
- [ ] Prefer URL-based downstream API inputs where provider accepts URLs.
- [ ] Add preview UX if image/video input materially affects result quality.

### 7) Environment variable hygiene

- [ ] Add only truly new env vars to `env.example`.
- [ ] Reuse existing env names where possible; avoid alias sprawl.
- [ ] Validate base URL/origin handling carefully for provider endpoints.
- [ ] Remove obsolete env vars and dead fallback logic.

### 8) Documentation updates

- [ ] Update implementation docs under `docs/implementation/*` for new API behaviors.
- [ ] Update user docs under `docs/user-guide/*` when user-visible behavior changes.
- [ ] Keep provider parameter examples aligned with actual request payload format.

### 9) Verification before handoff

- [ ] Run Next typecheck: `pnpm --filter @tinyship/next-app typecheck`
- [ ] Run Nuxt typecheck: `pnpm --filter @tinyship/nuxt-app typecheck`
- [ ] Run Next build: `pnpm --filter @tinyship/next-app build`
- [ ] Run Nuxt build: `pnpm --filter @tinyship/nuxt-app build`
- [ ] Use `agent-browser` to walk through the key user flow (Verify phase).

### 10) E2E tests

- [ ] Write Playwright E2E specs in `tests/e2e/specs/` (Test phase).
- [ ] Run E2E on current app: `npx playwright test --config=tests/e2e/playwright.config.ts <spec>`
- [ ] Switch to the other app on port 7001, run again.
- [ ] Both apps green → update `tests/e2e/TEST-CATALOG.md` results table (Green phase).
- [ ] See `tests/e2e/AGENTS.md` for E2E conventions and helpers.

### 11) Delivery format

- [ ] Summarize changed files grouped by: shared libs / Next / Nuxt / config / docs.
- [ ] List any intentional deviations from parity and why.
- [ ] Include verification command results and any warnings that remain.

## Feature Parity Matrix (Recommended)

When adding a new capability, track these rows explicitly:

- [ ] Shared domain (`libs/*`)
- [ ] Config (`config/*`)
- [ ] Next page/component
- [ ] Nuxt page/component
- [ ] Next API route
- [ ] Nuxt API route
- [ ] Middleware/permissions
- [ ] i18n EN + ZH
- [ ] Credits/transactions
- [ ] E2E tests (both apps green)
- [ ] Docs

## Key Project References

- Structure guideline: `.cursor/rules/project-structure.mdc`
- i18n conventions: `libs/i18n/AGENTS.md`
- AI provider implementation patterns: `libs/ai/AGENTS.md`
- Credits lifecycle: `libs/credits/AGENTS.md`
- Permissions model: `libs/permissions/AGENTS.md`
- Auth middleware design: `docs/implementation/auth-middleware-design.md`
- Build verification notes: `docs/implementation/build-verification.md`
- Storage upload guide: `docs/user-guide/storage.md`
- Credits user guide: `docs/user-guide/credits.md`
- E2E test conventions: `tests/e2e/AGENTS.md`
- E2E test catalog: `tests/e2e/TEST-CATALOG.md`

## Suggested Prompt Shortcut

When asking any coding model to build a feature in this repo, prepend:

`Please follow /AGENTS.md as the default implementation checklist and keep Next/Nuxt parity unless I explicitly say otherwise.`

