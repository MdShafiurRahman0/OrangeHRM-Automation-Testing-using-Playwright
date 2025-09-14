import { test, expect } from '@playwright/test';

test('Login with invalid password', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/', { timeout: 60000 });
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'wrongpass');

  await page.click('button[type="submit"]');

  // Assertion → error message visible
  await expect(page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/);
});
