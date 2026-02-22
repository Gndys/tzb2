# E2E Test Implementation Registry

Single source of truth for E2E test implementation status, conventions, and backlog.

## Purpose

Track which critical user flows have automated E2E coverage and guide adding new flows.

## Conventions

### File Naming

- Spec files: `tests/e2e/specs/<flow-name>.spec.ts`
- Helpers: `tests/e2e/helpers/<name>.ts`

### Selector Strategy

Use i18n-independent selectors in this order of preference:

1. `data-testid` attributes (most stable)
2. HTML element IDs (`#email`, `#password`)
3. ARIA roles (`[role="tab"]`, `[role="combobox"]`)
4. Element types + attributes (`input[type="email"]`, `button[type="submit"]`)
5. CSS class patterns (least stable, avoid when possible)

### Test Structure

- Use `test.describe()` for grouping related tests
- Use `test.beforeEach()` / `test.beforeAll()` for shared setup (e.g. auth)
- Keep tests independent — each test should not depend on another test's side effects
- Use API-based auth setup (via `helpers/auth.ts`) for speed; reserve UI-based auth for auth-flow tests

### Running Tests

```bash
# Start the app first (Next or Nuxt on port 7001)
pnpm dev:next   # or pnpm dev:nuxt

# Run all E2E tests
pnpm test:e2e

# Interactive UI mode (for debugging)
pnpm test:e2e:ui
```

## Implemented Flows

| Priority | Flow | Spec File | Tests |
|----------|------|-----------|-------|
| P0 | Public page smoke | `specs/public-pages.spec.ts` | Home, signin, signup, forgot-password, pricing page loads |
| P0 | Authentication | `specs/auth-flow.spec.ts` | Sign up (UI + API), sign in (UI + API), sign out, auth route redirects |
| P0 | Access control | `specs/access-control.spec.ts` | Unauth redirect for protected pages, admin 403, normal user dashboard access |
| P1 | Dashboard | `specs/dashboard.spec.ts` | Page load with user info, profile tab content, tab navigation |
| P1 | Pricing | `specs/pricing.spec.ts` | Plan cards render, features list, tab switching (subscription/credits) |
| P2 | AI features | `specs/ai-features.spec.ts` | AI chat, image gen, video gen page loads with input forms |

## Planned Flows (Backlog)

| Priority | Flow | Prerequisites | Notes |
|----------|------|---------------|-------|
| P1 | Payment initiation | Stripe/WeChat sandbox | Test payment flow up to redirect/QR display |
| P1 | Profile update | — | Edit name/avatar via dashboard |
| P2 | Password change | — | Change password via dashboard account tab |
| P2 | i18n switching | — | Verify locale toggle works and persists |
| P2 | Upload flow | Storage provider config | Test file upload UI interaction |
| P3 | Admin panel | Admin test account | Admin CRUD operations |
| P3 | Social/OAuth login | OAuth provider config | Google/GitHub/WeChat login |
| P3 | Email verification | Email service | Full verification flow |

## How to Add a New Flow

1. **Create spec file**: `tests/e2e/specs/<flow-name>.spec.ts`
2. **Import helpers**: Use `helpers/constants.ts` for URLs and `helpers/auth.ts` for auth setup
3. **Write tests**: Follow the conventions above
4. **Update this registry**: Add the new flow to the "Implemented Flows" table
5. **Run and verify**: `pnpm test:e2e` against both Next and Nuxt apps

## Test Result Tracking

After running tests, record results in this section:

### Latest Results

| Date | App | Passed | Failed | Skipped | Notes |
|------|-----|--------|--------|---------|-------|
| — | Next.js | — | — | — | — |
| — | Nuxt.js | — | — | — | — |

_Update this table after each test run._
