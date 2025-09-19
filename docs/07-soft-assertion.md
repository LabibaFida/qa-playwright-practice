# Hard vs Soft Assertions in Playwright

## What is an Assertion?
An **assertion** is a checkpoint that verifies whether the actual result matches the expected result during test execution. Assertions help validate application behavior.

---

##  Hard Assertion
- A **hard assertion** immediately stops the test execution if it fails.  
- Subsequent steps or checks will **not be executed**.  
- Useful when a failed condition makes the rest of the test irrelevant.

**Example:**
```javascript
await expect(page).toHaveTitle('STORE');
```
If the title is incorrect, the test fails immediately and no further steps run.

##  Soft Assertion
- A **soft assertion** allows the test to continue execution even if the assertion fails. 
- At the end of the test, Playwright will report all the soft assertion failures together.
- Useful when you want to validate multiple conditions independently.

**Example:**
```javascript
const { test, expect } = require('@playwright/test');

test('Soft Assertions Test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
  await expect.soft(page).toHaveTitle('STORE');   // Even if wrong, test continues
  await expect.soft(page.locator('.navbar-brand')).toBeVisible();

  // This will still run even if above soft assertions fail
  await page.click('#login2');
});

```
## Difference Between Hard and Soft Assertion

| Feature              | Hard Assertion                            | Soft Assertion              |
| -------------------- | ----------------------------------------- | --------------------------- |
| Execution on failure | Stops immediately                         | Continues                   |
| Error reporting      | Reports first failure only                | Reports all failed checks   |
| Use case             | Critical checks where failure blocks test | Multiple independent checks |





