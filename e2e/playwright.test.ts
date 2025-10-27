import { test, expect } from '@playwright/test';

const PLAY_WRIGHT_URL = 'https://playwright.dev/';

test('has title', async ({ page }) => {
  // 1. navigation
  await page.goto(PLAY_WRIGHT_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
})

test('get started link', async ({ page }) => {
  // 1. Navigation | Arrange
  await page.goto(PLAY_WRIGHT_URL);

  // 2. Interactions | Act

  // Create Locator
  // const getStartedLink = page.getByRole('link', { name: 'Get Started' });
  
  // Click it
  // await getStartedLink.click();

  // In most cases, it'll be written in one line:
  await page.getByRole('link', { name: 'Get started' }).click();

  // 3. Assertions | Assert
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation'})).toBeVisible();
});