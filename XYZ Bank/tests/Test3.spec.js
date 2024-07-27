const {test,expect} = require('@playwright/test');
test.setTimeout(60000);

// Validation for withdrawal

test('Withdraw Validation', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Customer Login' }).click();
    await page.waitForTimeout(2000);
    await page.locator('#userSelect').selectOption('4');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);
    await page.locator('#accountSelect').selectOption('number:1010');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Withdrawl' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('amount').fill('300');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Logout' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Home' }).click();
    await page.waitForTimeout(3000); 
});