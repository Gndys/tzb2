import { test, expect, type BrowserContext, type Page } from '@playwright/test';
import { PAGES, TIMEOUTS, ADMIN_USER } from '../helpers/constants';
import { signInViaAPI } from '../helpers/auth';

/**
 * Admin Panel E2E Tests
 *
 * Verifies the admin dashboard and its sub-pages using the
 * pre-existing admin account (admin@example.com / admin123).
 *
 * Covers:
 * - Admin dashboard loads with statistics cards
 * - Sidebar navigation to Users, Subscriptions, Orders, Credits pages
 * - Data tables render on each sub-page
 * - Non-admin users are denied access (403 / Access Denied)
 */

test.describe('Admin Panel', () => {
  test.describe.configure({ mode: 'serial' });

  let adminContext: BrowserContext;

  test.beforeAll(async ({ browser }) => {
    adminContext = await browser.newContext();
    const page = await adminContext.newPage();

    const res = await signInViaAPI(page, {
      email: ADMIN_USER.email,
      password: ADMIN_USER.password,
    });
    expect(res.ok(), `Admin sign-in failed: ${res.status()}`).toBeTruthy();
    await page.close();
  });

  test.afterAll(async () => {
    await adminContext?.close();
  });

  async function adminPage(): Promise<Page> {
    return adminContext.newPage();
  }

  // ── Admin Dashboard ──────────────────────────────────────────────

  test('admin dashboard loads and shows statistics cards', async () => {
    const page = await adminPage();
    await page.goto(PAGES.admin, { timeout: TIMEOUTS.navigation });

    // Should show "Admin Dashboard" title
    await expect(
      page.locator('h1').filter({ hasText: /Admin Dashboard|管理面板/ })
    ).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Should have at least 4 metric cards (Revenue, Customers, Orders, etc.)
    const metricCards = page.locator('.rounded-2xl');
    await expect(metricCards.first()).toBeVisible({ timeout: TIMEOUTS.navigation });
    expect(await metricCards.count()).toBeGreaterThanOrEqual(4);

    await page.close();
  });

  test('admin dashboard shows revenue chart and today data', async () => {
    const page = await adminPage();
    await page.goto(PAGES.admin, { timeout: TIMEOUTS.navigation });

    // "Today's Data" section
    await expect(
      page.locator('text=/Today|今日/').first()
    ).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Recent orders section
    await expect(
      page.locator('text=/Recent Orders|最近订单|Order/').first()
    ).toBeVisible({ timeout: TIMEOUTS.navigation });

    await page.close();
  });

  // ── Admin Sub-pages ──────────────────────────────────────────────

  test('admin users page loads with data table', async () => {
    const page = await adminPage();
    await page.goto(PAGES.adminUsers, { timeout: TIMEOUTS.navigation });

    // Should show user management heading
    await expect(
      page.locator('text=/User Management|用户管理/').first()
    ).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Should have a data table
    await expect(page.locator('table').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    await page.close();
  });

  test('admin subscriptions page loads with data table', async () => {
    const page = await adminPage();
    await page.goto(PAGES.adminSubscriptions, { timeout: TIMEOUTS.navigation });

    // Should have a table (subscriptions data)
    await expect(page.locator('table').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    await page.close();
  });

  test('admin orders page loads with data table', async () => {
    const page = await adminPage();
    await page.goto(PAGES.adminOrders, { timeout: TIMEOUTS.navigation });

    // Should have a table (orders data)
    await expect(page.locator('table').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    await page.close();
  });

  test('admin credits page loads with data table', async () => {
    const page = await adminPage();
    await page.goto(PAGES.adminCredits, { timeout: TIMEOUTS.navigation });

    // Should have a table (credits data)
    await expect(page.locator('table').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    await page.close();
  });

  // ── Sidebar Navigation ──────────────────────────────────────────

  test('admin sidebar navigation works across sub-pages', async () => {
    const page = await adminPage();
    await page.goto(PAGES.admin, { timeout: TIMEOUTS.navigation });

    // Click "Users" in the sidebar
    const usersLink = page.locator('a[href*="/admin/users"]');
    await usersLink.first().click();
    await page.waitForURL(/\/admin\/users/, { timeout: TIMEOUTS.navigation });
    expect(page.url()).toContain('/admin/users');

    // Click "Orders" in the sidebar
    const ordersLink = page.locator('a[href*="/admin/orders"]');
    await ordersLink.first().click();
    await page.waitForURL(/\/admin\/orders/, { timeout: TIMEOUTS.navigation });
    expect(page.url()).toContain('/admin/orders');

    await page.close();
  });

  // ── Access Denied for Non-Admin ────────────────────────────────

  test('non-admin user sees access denied on admin page', async ({ browser }) => {
    // Use a fresh context (no auth)
    const guestContext = await browser.newContext();
    const page = await guestContext.newPage();

    await page.goto(PAGES.admin, { timeout: TIMEOUTS.navigation });

    // Should either redirect to sign-in or show "Access Denied"
    const isRedirected = page.url().includes('/signin');
    const hasAccessDenied = await page
      .locator('text=/Access Denied|权限不足|403/')
      .first()
      .isVisible()
      .catch(() => false);

    expect(isRedirected || hasAccessDenied).toBeTruthy();

    await page.close();
    await guestContext.close();
  });
});
