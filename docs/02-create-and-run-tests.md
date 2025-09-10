# 02 - Create and Run Tests with Playwright

This document explains how to create your first automated test using **Playwright** and run it locally.

---
## 1. Project Setup
Make sure Playwright is already installed in your project.  
If not, install it with:

```bash
npm init playwright@latest


## 2. Create Your First Test

### Example from Playwright Docs
```ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});