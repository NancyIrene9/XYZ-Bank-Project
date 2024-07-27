const { test, expect } = require('@playwright/test');
test.setTimeout(60000);

// Open Account Page: Open account / validate mandatory fields

test('Open Account ', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Open Account' }).click();
    await page.waitForTimeout(2000);

    // Attempt to process with empty mandatory fields
    await page.getByRole('form').getByRole('button', { name: 'Process' }).click();
    await page.waitForTimeout(2000);

    // Select customer from dropdown
    await page.locator('#userSelect').selectOption('1');
    await page.waitForTimeout(1000);

    // Attempt to process with one field filled
    await page.getByRole('form').getByRole('button', { name: 'Process' }).click();
    await page.waitForTimeout(2000);

    // Select currency from dropdown
    await page.locator('#currency').selectOption('Dollar');
    await page.waitForTimeout(3000);

    // Complete the process
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.dismiss();
    });

    await page.getByRole('form').getByRole('button', { name: 'Process' }).click();
    await page.waitForTimeout(3000);
});
