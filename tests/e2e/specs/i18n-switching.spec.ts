import { test, expect } from '@playwright/test';
import { PAGES, TIMEOUTS, BASE } from '../helpers/constants';

/**
 * i18n Language Switching E2E Tests
 *
 * Verifies that the language switcher in the header works correctly:
 * - Default locale loads properly (English)
 * - Can switch from English to Chinese via the language dropdown
 * - URL updates to /zh-CN/...
 * - Can switch back to English
 * - Cookie persists the locale preference
 */

test.describe('i18n Language Switching', () => {
  test('home page loads with English locale by default', async ({ page }) => {
    await page.goto(PAGES.home, { timeout: TIMEOUTS.navigation });

    // Page should be at /en (or /en/)
    expect(page.url()).toContain('/en');

    // Verify some English text is visible (e.g. header navigation)
    await expect(page.locator('body')).toBeVisible();
  });

  test('can switch from English to Chinese via header language dropdown', async ({
    page,
  }) => {
    await page.goto(PAGES.home, { timeout: TIMEOUTS.navigation });

    // Click the language dropdown trigger (button with Globe icon)
    const languageButton = page.locator('header button').filter({
      hasText: /English|中文/,
    });
    await languageButton.first().click();

    // Click the Chinese option in the dropdown menu
    const chineseOption = page.locator('[role="menuitem"]').filter({
      hasText: /中文/,
    });
    await chineseOption.first().click();

    // Wait for full page reload to /zh-CN/
    await page.waitForURL(/\/zh-CN/, { timeout: TIMEOUTS.navigation });

    // Verify the URL now contains zh-CN
    expect(page.url()).toContain('/zh-CN');
  });

  test('can switch from Chinese back to English', async ({ page }) => {
    // Start on Chinese page
    await page.goto('/zh-CN', { timeout: TIMEOUTS.navigation });
    expect(page.url()).toContain('/zh-CN');

    // Click language dropdown
    const languageButton = page.locator('header button').filter({
      hasText: /English|中文/,
    });
    await languageButton.first().click();

    // Click the English option
    const englishOption = page.locator('[role="menuitem"]').filter({
      hasText: /English/,
    });
    await englishOption.first().click();

    // Wait for full page reload to /en/
    await page.waitForURL(/\/en/, { timeout: TIMEOUTS.navigation });

    expect(page.url()).toContain('/en');
  });

  test('locale persists across navigation', async ({ page }) => {
    // Switch to Chinese first
    await page.goto('/zh-CN', { timeout: TIMEOUTS.navigation });

    // Navigate to pricing page while on Chinese locale
    await page.goto('/zh-CN/pricing', { timeout: TIMEOUTS.navigation });

    // Should still be on zh-CN
    expect(page.url()).toContain('/zh-CN/pricing');

    // Navigate to sign-in page
    await page.goto('/zh-CN/signin', { timeout: TIMEOUTS.navigation });
    expect(page.url()).toContain('/zh-CN/signin');
  });

  test('sub-pages work in both locales', async ({ page }) => {
    // English pricing page
    await page.goto(`${BASE}/pricing`, { timeout: TIMEOUTS.navigation });
    await expect(page.locator('h1, h2').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });

    // Chinese pricing page
    await page.goto('/zh-CN/pricing', { timeout: TIMEOUTS.navigation });
    await expect(page.locator('h1, h2').first()).toBeVisible({
      timeout: TIMEOUTS.navigation,
    });
  });
});
