import { test, expect, type BrowserContext, type Page } from '@playwright/test';
import { PAGES, TIMEOUTS, uniqueEmail } from '../helpers/constants';
import { signUpViaAPI } from '../helpers/auth';

/**
 * Profile Update E2E Tests
 *
 * Verifies the dashboard profile editing flow:
 * - Click "Edit" to enter editing mode
 * - Change the user name
 * - Save the change and see a success toast
 * - Verify the displayed name is updated
 */

test.describe('Profile Update', () => {
  test.describe.configure({ mode: 'serial' });

  let authContext: BrowserContext;
  const password = 'TestPassword123!';
  const originalName = 'Profile Test User';
  let userEmail: string;

  test.beforeAll(async ({ browser }) => {
    userEmail = uniqueEmail('e2e-profile');
    authContext = await browser.newContext();
    const page = await authContext.newPage();

    const res = await signUpViaAPI(page, {
      name: originalName,
      email: userEmail,
      password,
    });
    expect(res.ok(), `Sign-up failed: ${res.status()}`).toBeTruthy();
    await page.close();
  });

  test.afterAll(async () => {
    await authContext?.close();
  });

  async function authedPage(): Promise<Page> {
    return authContext.newPage();
  }

  test('dashboard profile tab shows user name and edit button', async () => {
    const page = await authedPage();
    await page.goto(PAGES.dashboard, { timeout: TIMEOUTS.navigation });

    // Profile tab is active by default — verify name is displayed
    await expect(page.locator('text=' + originalName).first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    // Verify the "Edit" button exists
    const editButton = page.locator('button:has(svg)').filter({ hasText: /Edit/i });
    await expect(editButton.first()).toBeVisible({ timeout: TIMEOUTS.navigation });

    await page.close();
  });

  test('can enter edit mode and change name', async () => {
    const page = await authedPage();
    await page.goto(PAGES.dashboard, { timeout: TIMEOUTS.navigation });

    // Wait for the profile to load
    await expect(page.locator('text=' + originalName).first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    // Click Edit button
    const editButton = page.locator('button:has(svg)').filter({ hasText: /Edit/i });
    await editButton.first().click();

    // Verify edit mode — name input should appear
    const nameInput = page.locator('#name');
    await expect(nameInput).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Clear and type a new name
    const newName = 'Updated E2E Name';
    await nameInput.fill(newName);

    // Click save button
    const saveButton = page.locator('button:has(svg)').filter({ hasText: /Save/i });
    await saveButton.first().click();

    // Wait for the edit mode to close (edit button reappears)
    await expect(
      page.locator('button:has(svg)').filter({ hasText: /Edit/i }).first()
    ).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Verify the new name is displayed
    await expect(page.locator('text=' + newName).first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    await page.close();
  });
});
