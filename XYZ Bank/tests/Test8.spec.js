import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Customers' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'First Name' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Last Name' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Post Code' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('row', { name: 'Hermoine Granger E859AB 1001' }).getByRole('button').click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Home' }).click();
  await page.waitForTimeout(1000);
});