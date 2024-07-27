const { test, expect } = require('@playwright/test');
test.setTimeout(60000);

//Search customer and perform delete operation

test('Search Customer and Perform Delete Operation', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Customers' }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Search Customer').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Search Customer').fill('Ron');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForTimeout(1000);
  });