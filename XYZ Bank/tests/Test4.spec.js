import { test, expect } from '@playwright/test';

// Add Customer 
test.setTimeout(60000);
test('Add Customer', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Add Customer' }).click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('First Name').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('First Name').fill('Mike');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Last Name').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Last Name').fill('Arrow');
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Post Code').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Post Code').fill('2145');
  await page.waitForTimeout(2000);

  // Check the dialog message in the terminal
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
});
  await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
  await page.waitForTimeout(3000);
  

});
