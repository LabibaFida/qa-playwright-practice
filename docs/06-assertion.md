# 06 - Assertions in Playwright

Assertions are validations that confirm whether the expected conditions are true during test execution.  
They ensure your test interacts with the right elements and the application behaves as expected.

---

## ✅ Example: Assertions in Action

```javascript
const { test, expect } = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {

  // Open app url
  await page.goto('https://demo.nopcommerce.com/register')

  // Page has URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  // Page has Title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  // Element is Visible
  const logoElement = await page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  // Control is Enabled
  const searchStoreBox = await page.locator('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()

  // Radio button is Checked
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  // Checkbox is Checked
  const newsletterCheckbox = await page.locator('#Newsletter')
  await expect(newsletterCheckbox).toBeChecked()

  // Element has a DOM Attribute
  const regButton = await page.locator('#register-button')
  await expect(regButton).toHaveAttribute('type', 'submit')

  // Element matches Text
  await expect(page.locator('.page-title h1')).toHaveText('Register')  // Full Text

  // Element contains Text
  await expect(page.locator('.page-title h1')).toContainText('Reg')   // Partial Text

  // Input has a Value
  const emailInput = await page.locator('#Email')
  await emailInput.fill('test@demo.com')
  await expect(emailInput).toHaveValue('test@demo.com')

})
```

## Explanation of Assertions

 toHaveURL → Verify current URL matches expected

 toHaveTitle → Verify page title matches expected

 toBeVisible → Verify element is visible

 toBeEnabled → Verify element is enabled

 toBeChecked → Verify radio button / checkbox is selected

 toHaveAttribute → Verify element has specific attribute & value

 toHaveText → Verify element text (full match)

 toContainText → Verify element text (partial match)

 toHaveValue → Verify input has expected value




 # Note

The Newsletter checkbox on the demo site is already checked by default.
If it wasn’t, you would first need to click it before asserting with toBeChecked().


## Negating matchers
In general, we can expect the opposite to be true by adding a .not to the front of the matchers:

```javascript
expect(value).not.toEqual(0);
await expect(locator).not.toContainText('some text');
```
# Key Takeaways

Assertions validate that your test steps worked as expected.

They improve test reliability and catch unexpected UI changes.

Use different assertion types depending on what you want to verify.