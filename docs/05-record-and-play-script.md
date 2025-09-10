# 05 - Record & Play Scripts | Test Generator (Codegen)

Playwright provides a built-in **Codegen tool** to record and generate test scripts automatically.  
This feature is helpful for beginners to quickly create tests without manually writing all selectors.

---

##  What is Codegen?

- **Codegen** is a test generator that records your browser actions and converts them into Playwright test code.
- It helps you **learn selectors**, **create scripts faster**, and **reduce manual effort**.

---

##  Launching Codegen

Run the following command in your terminal:

```bash
npx playwright codegen https://demoblaze.com/

```

## This will:

- Open a new browser window.

- Start recording your clicks, inputs, and navigations.

- Display the generated Playwright test code in a separate Codegen window.

# Example: Recording a Script

Suppose you open https://demoblaze.com/, click on a product, and add it to the cart.
Codegen will generate something like this:

```javascript
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Labiba');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});
```

## Saving & Running the Script

Save the generated code into your tests/ folder, e.g., RecordTest.spec.js.

Run the test using:

npx playwright test tests/RecordTest.spec.js

## Key Benefits of Codegen

Quickly prototype tests.

Learn selector strategies (CSS/XPath/Text).

Reduce time writing repetitive code.

Great for exploratory testing.

 However, do not rely only on Codegen — refine selectors and add assertions to make tests reliable.

## Key Takeaways

Use Codegen for recording and generating Playwright scripts.

Generated code can be modified to make it more robust.

Best used as a starting point, not the final test.