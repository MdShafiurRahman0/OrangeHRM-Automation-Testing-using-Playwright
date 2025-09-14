import { test, expect } from '@playwright/test';

test.setTimeout(180000); 


test('add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  await page.click('a[href*="pim"]');

  await page.click('button:has-text("Add")');
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.click('button[type="submit"]');

  const pageHeader = page.locator('div.orangehrm-main-title');
  await expect(pageHeader).toHaveText('Add Employee', { timeout: 30000 });

});
