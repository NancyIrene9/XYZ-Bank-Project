const {test,expect} = require('@playwright/test');
test.setTimeout(60000);


//Customer login , Deposit & Withdrawal , View transactions , logout
   
test('test', async ({ page }) => {
           
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.getByRole('button', { name: 'Customer Login' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#userSelect').selectOption('2');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#accountSelect').selectOption('number:1005');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Deposit' }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('amount').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('amount').fill('500');
    await page.waitForTimeout(1000);
    await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Withdrawl' }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('amount').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('amount').fill('300');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('amount').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('amount').fill('100');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Transactions' }).click();
    await page.waitForTimeout(3000); 
    await page.getByRole('button', { name: '>' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('link', { name: 'Date-Time' }).click();
    await page.waitForTimeout(2000); 
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.waitForTimeout(2000); 
    await page.getByRole('button', { name: 'Back' }).click();
    await page.waitForTimeout(1000); 
    await page.getByRole('button', { name: 'Logout' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Home' }).click();
    await page.waitForTimeout(1000); 
});