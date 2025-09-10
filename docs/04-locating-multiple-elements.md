# 04 - Locating Multiple Elements in Playwright

When working with web applications, you often need to capture and verify lists of elements (e.g., multiple links, product names, or menu items). Playwright makes this simple with the page.$$() method, which returns an array of element handles.

# Methods to Locate Multiple Elements

page.$$(selector) → Finds all elements matching the selector.

Looping → You can use for..of or map() to process them.

Element properties → Extract text using textContent(), attributes with getAttribute(), etc.

# Example 1: Capture All Links

```javascript
const { test } = require('@playwright/test');

test('Locate all links on page', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Locate all <a> elements
  const links = await page.$$('a');

  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }
});
```
# Example 2: Capture All Product Names

```javascript
const { test, expect } = require('@playwright/test');

test('Locate multiple product names', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Capture all product names with XPath
  const products = await page.$$("xpath=//div[@id='tbodyid']//h4//a");

  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }

  // ✅ Optional: Verify total number of products
  expect(products.length).toBeGreaterThan(0);
});
```

# Key Takeaways

Use **page.$$()** when you need to handle multiple elements.

Loop through elements to extract text or attributes.

Combine with assertions to validate count or content.

Always test your selectors in browser DevTools first.