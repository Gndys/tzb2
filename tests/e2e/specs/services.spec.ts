import { expect, test } from '@playwright/test';

import { PAGES, TIMEOUTS } from '../helpers/constants';

const serviceSlugs = [
  'water-sports',
  'festival-custom',
  'education-courses',
  'business-exhibition',
  'cultural-retail',
] as const;

test.describe('Service Pages', () => {
  test('homepage exposes five service entry cards', async ({ page }) => {
    await page.goto(PAGES.home, { timeout: TIMEOUTS.navigation });

    const cards = page.locator('[data-testid^="service-card-"]');
    await expect(cards).toHaveCount(5);

    for (const slug of serviceSlugs) {
      await expect(page.locator(`[data-testid="service-card-${slug}"]`)).toBeVisible();
    }
  });

  test('homepage card navigates to the matching detail page', async ({ page }) => {
    await page.goto(PAGES.home, { timeout: TIMEOUTS.navigation });

    await page.locator('[data-testid="service-card-water-sports"]').click();

    await expect(page).toHaveURL(new RegExp(`${PAGES.services}/water-sports$`));
    await expect(page.locator('[data-testid="service-detail-water-sports"]')).toBeVisible();
  });

  test('service detail page renders service sections and pricing cards', async ({ page }) => {
    await page.goto(PAGES.serviceBusinessExhibition, { timeout: TIMEOUTS.navigation });

    await expect(page.locator('[data-testid="service-detail-business-exhibition"]')).toBeVisible();

    const sections = page.locator('[data-testid^="service-section-"]');
    await expect(sections).toHaveCount(3);

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=/¥|元|Custom quote|定制报价/').first()).toBeVisible();
  });

  test('invalid service slug returns 404', async ({ page }) => {
    const response = await page.goto(`${PAGES.services}/not-a-real-service`, {
      timeout: TIMEOUTS.navigation,
    });

    expect(response?.status()).toBe(404);
  });
});
