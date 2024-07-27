const { test, expect } = require('@playwright/test');
test.setTimeout(60000);

// validating mandatory fields / Already Existing Customer details

test('Validate Mandatory Fields / Already Existing Customer Details', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add Customer' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('First Name').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('First Name').fill('nancy');
    await page.waitForTimeout(1000);
    await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('Last Name').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Last Name').fill('irene');
    await page.waitForTimeout(1000);
    await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('Post Code').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Post Code').fill('2145');
    await page.waitForTimeout(4000);
    await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    await page.waitForTimeout(4000);
  });
  