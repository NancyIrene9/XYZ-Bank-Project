const {test,expect} = require('@playwright/test');

//Validation for Deposit

test('Deposit Valdidation', async ({ page }) => {
           
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
            await page.getByRole('button', { name: 'Customer Login' }).click();
            await page.waitForTimeout(1000);
            await page.locator('#userSelect').selectOption('2');
            await page.waitForTimeout(1000);
            await page.getByRole('button', { name: 'Login' }).click();
            await page.waitForTimeout(1000);
            await page.locator('#accountSelect').selectOption('number:1004');
            await page.waitForTimeout(1000);
            await page.getByRole('button', { name: 'Deposit' }).click();
            await page.waitForTimeout(1000);
            await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
            await page.waitForTimeout(2000);
            await page.getByPlaceholder('amount').click();
            await page.waitForTimeout(1000);
            await page.getByPlaceholder('amount').fill('500');
            await page.waitForTimeout(1000);
            await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
            await page.waitForTimeout(1000);
            await page.getByRole('button', { name: 'Logout' }).click();
            await page.waitForTimeout(1000);
            await page.getByRole('button', { name: 'Home' }).click();
            await page.waitForTimeout(3000); 

});