import { test, expect, type BrowserContext, type Page } from '@playwright/test';
import { PAGES, TIMEOUTS, uniqueEmail } from '../helpers/constants';
import { signUpViaAPI } from '../helpers/auth';

/**
 * Upload Page E2E Tests
 *
 * Verifies the upload page UI loads correctly and key elements are present.
 * Actual file upload is skipped as it requires storage provider configuration
 * (OSS / S3 / R2 / COS credentials).
 */

test.describe('Upload Page', () => {
  test.describe.configure({ mode: 'serial' });

  let authContext: BrowserContext;
  let userEmail: string;

  test.beforeAll(async ({ browser }) => {
    userEmail = uniqueEmail('e2e-upload');
    authContext = await browser.newContext();
    const page = await authContext.newPage();

    const res = await signUpViaAPI(page, {
      name: 'Upload Test User',
      email: userEmail,
      password: 'TestPassword123!',
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

  test('upload page loads with storage provider selector', async () => {
    const page = await authedPage();
    await page.goto(PAGES.upload, { timeout: TIMEOUTS.navigation });

    // Page should display the upload area
    // Look for the file upload dropzone or upload-related heading
    await expect(page.locator('h1, h2, h3').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    // Storage provider selector should be visible
    // (it's a Select / combobox component)
    const providerSelect = page.locator('[role="combobox"], select').first();
    await expect(providerSelect).toBeVisible({ timeout: TIMEOUTS.navigation });

    await page.close();
  });

  test('upload dropzone area is present', async () => {
    const page = await authedPage();
    await page.goto(PAGES.upload, { timeout: TIMEOUTS.navigation });

    // Look for the upload dropzone (file upload area with drag & drop)
    const dropzone = page.locator('[data-slot="file-upload-dropzone"], [role="presentation"]');
    const uploadButton = page.locator('button').filter({ hasText: /Upload|上传|Browse|选择/ });

    // At least one upload-related element should be visible
    const hasDropzone = await dropzone.first().isVisible().catch(() => false);
    const hasUploadButton = await uploadButton.first().isVisible().catch(() => false);

    expect(hasDropzone || hasUploadButton).toBeTruthy();

    await page.close();
  });
});
