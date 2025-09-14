import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Enter username & password
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  // Click login
  await page.click('button[type="submit"]');

  // Assertion → Dashboard visible
  await expect(page).toHaveURL(/dashboard/);
});
