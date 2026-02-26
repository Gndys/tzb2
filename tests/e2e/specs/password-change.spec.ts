import { test, expect, type BrowserContext, type Page } from '@playwright/test';
import { PAGES, TIMEOUTS, uniqueEmail } from '../helpers/constants';
import { signUpViaAPI, signInViaAPI, signOutViaAPI } from '../helpers/auth';

/**
 * Password Change E2E Tests
 *
 * Verifies the password change flow from the dashboard Account tab:
 * - Navigate to Account tab
 * - Open the "Change Password" dialog
 * - Fill current + new + confirm password
 * - Submit and verify success
 * - Sign out and sign back in with the new password
 */

test.describe('Password Change', () => {
  test.describe.configure({ mode: 'serial' });

  let authContext: BrowserContext;
  const originalPassword = 'TestPassword123!';
  const newPassword = 'NewPassword456!';
  const userName = 'Password Test User';
  let userEmail: string;

  test.beforeAll(async ({ browser }) => {
    userEmail = uniqueEmail('e2e-pwchange');
    authContext = await browser.newContext();
    const page = await authContext.newPage();

    const res = await signUpViaAPI(page, {
      name: userName,
      email: userEmail,
      password: originalPassword,
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

  test('account tab shows change password section', async () => {
    const page = await authedPage();
    await page.goto(PAGES.dashboard, { timeout: TIMEOUTS.navigation });

    // Click the Account tab (English: "Account", Chinese: "账户")
    const accountTab = page.locator('button[role="tab"]').filter({
      hasText: /Account|账户/,
    });
    await accountTab.first().click();

    // Verify the "Change Password" section is visible
    await expect(
      page.locator('text=/Change Password|修改密码/').first()
    ).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Verify the change password button is visible
    const changePasswordButton = page
      .locator('button')
      .filter({ hasText: /Change Password|修改密码/ });
    await expect(changePasswordButton.first()).toBeVisible();

    await page.close();
  });

  test('can open change password dialog and fill form', async () => {
    const page = await authedPage();
    await page.goto(PAGES.dashboard, { timeout: TIMEOUTS.navigation });

    // Navigate to Account tab
    const accountTab = page.locator('button[role="tab"]').filter({
      hasText: /Account|账户/,
    });
    await accountTab.first().click();

    // Click the "Change Password" button to open dialog
    const changePasswordButton = page
      .locator('button')
      .filter({ hasText: /Change Password|修改密码/ });
    await changePasswordButton.first().click();

    // Wait for dialog to open
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: TIMEOUTS.navigation });

    // Fill the form
    await page.locator('#currentPassword').fill(originalPassword);
    await page.locator('#newPassword').fill(newPassword);
    await page.locator('#confirmPassword').fill(newPassword);

    // Click submit button inside the dialog
    const submitButton = dialog.locator('button[type="submit"]');
    await submitButton.click();

    // Wait for dialog to close (indicates success)
    await expect(dialog).toBeHidden({ timeout: TIMEOUTS.navigation });

    await page.close();
  });

  test('can sign in with the new password', async ({ browser }) => {
    // Create a fresh browser context (no existing cookies)
    const freshContext = await browser.newContext();
    const page = await freshContext.newPage();

    // Try signing in with the new password
    const res = await signInViaAPI(page, {
      email: userEmail,
      password: newPassword,
    });
    expect(res.ok(), `Sign-in with new password failed: ${res.status()}`).toBeTruthy();

    // Navigate to dashboard to confirm session is valid
    await page.goto(PAGES.dashboard, { timeout: TIMEOUTS.navigation });
    await expect(page.locator('text=' + userName).first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    await page.close();
    await freshContext.close();
  });
});
