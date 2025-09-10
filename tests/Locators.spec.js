// const {test,expect} = require('@playwright/test')

import {test,expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto('https://demoblaze.com/');


// Click login button by ID

    //await page.locator('login2').click()
     await page.click('#login2');
     await page.waitForSelector('#loginusername'); // Wait for the modal


 //Fill username (CSS)

//await page.locator('#loginusername').fill("value")
await page.fill('#loginusername','Labiba');
// await page.type(#loginusername)


  // Fill password (CSS)

await page.fill('#loginpassword','test@123');


// Click login button (XPath)

// await page.click(' id =login2 ');

//await page.click("//button[normalize-space() ='Log in']")

await page.locator("//button[normalize-space() ='Log in']").click();
await page.waitForTimeout(3000);

// Verify logout link is visible (XPath)

const logoutlink = await page.locator("//a[normalize-space()='Log Out']");

await expect(logoutlink).toBeVisible({ timeout: 5000 });

await page.close() 

});