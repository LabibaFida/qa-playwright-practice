const {test,expect} = require('@playwright/test')

test('AssertionsTest', async({page})=>{

//open app url
await page.goto('https://demo.nopcommerce.com/register')



// Page has url:       expect(page).toHaveUrl()
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

//Page has Title:           expect(page).toHaveTitle() 

await expect(page).toHaveTitle('nopCommerce demo store. Register') 


// Element is Visible:   expect(locator).toBeVisible()

const logoElement = await page.locator('.header-logo')
await expect(logoElement).toBeVisible()


// Control is Enabled:     expect(locator).toBeEnabled()

  const searchStoreBox = await page.locator ('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()


// Radio/Checkbox is checked:     expect(locator).toBeChecked()


//radio button 
const maleRadioButton = await page.locator('#gender-male')   
await maleRadioButton.click()
await expect(maleRadioButton).toBeChecked()


//checkbox
const newsletterCheckbox = await page.locator('#Newsletter')
await expect(newsletterCheckbox).toBeChecked()


// Element has a DOM attribute:  expect(locator).toHaveAttribute()	  


const regButton = await page.locator('#register-button')

await expect(regButton).toHaveAttribute('type','submit')	  


// Element matches text:       expect(locator).toHaveText()	

await expect(await page.locator('.page-title h1')).toHaveText('Register')     //Full Text


// Element contains text:      expect(locator).toContainText()	

await expect(await page.locator('.page-title h1')).toContainText('Reg')  //Partial Text

// Input has a value:         expect(locator).toHaveValue()	

const emailInput = await page.locator('#Email')
await emailInput.fill('test@demo.com');
await expect(emailInput).toHaveValue('test@demo.com')

})