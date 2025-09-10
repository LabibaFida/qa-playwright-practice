# 03 - Locating Web Elements in Playwright

Locating elements is one of the most important parts of writing automated tests.  
In Playwright, you use **locators** to find and interact with elements on a webpage.

---

## 🔎 1. What is a Locator?
A **locator** is a way to tell Playwright *which element* you want to interact with on a page.  
You can use different strategies like **text, CSS selectors, XPath, and roles**.
### Example: Locating elements on DemoBlaze

Here’s a real test that demonstrates using CSS and XPath locators:

```javascript
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await page.click('#login2'); // ID
  await page.waitForSelector('#loginusername');

  await page.fill('#loginusername', 'Labiba'); // CSS
  await page.fill('#loginpassword', 'test@123'); // CSS

  await page.locator("//button[normalize-space()='Log in']").click(); // XPath
  await page.waitForTimeout(3000);

  const logoutlink = page.locator("//a[normalize-space()='Log Out']"); // XPath
  await expect(logoutlink).toBeVisible({ timeout: 5000 });

  await page.close();
});

