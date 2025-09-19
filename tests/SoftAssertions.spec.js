const {test,expect} = require('@playwright/test')

test('Soft Assertions Test', async({page})=>{

// Navigate to site
  await page.goto('https://www.demoblaze.com/');


await expect.soft(page).toHaveURL(("https://www.demoblaze.com/index.html"));

await expect.soft(page).toHaveTitle('STORE123')   //Incorrect Title

await expect.soft(page.locator('.navbar-brand')).toBeVisible();


  // This will still execute even if above assertions fail
  await page.click('#login2');

  await page.screenshot({ path: 'soft-assert-result.png' });

})