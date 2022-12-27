// @ts-check
const { test, expect } = require('@playwright/test');

test('Redirect to Gmail page', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const gmailPage = page.locator("a.gb_j", {hasText: 'Gmail' });
  await gmailPage.click();
  
  await expect(page).toHaveURL(/.*mail/);
});




test('Redirect to Login page', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const gmailPage = page.locator("a.gb_7.gb_8.gb_de.gb_dd", {hasText: 'Đăng nhập' });
  await gmailPage.click();
  
  await expect(page).toHaveTitle('Đăng nhập - Tài khoản Google');
});