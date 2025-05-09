import { test, expect } from '@playwright/test';

test('Sayfa başlığı doğru olmalı', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  await expect(page).toHaveTitle(/Online Free Security Tools | S4E/);
});

test('"Full Scan" butonu görünür olmalı', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  const fullScanButton = await page.locator('button:has-text("Full Scan your assets with all security checks")');
  await expect(fullScanButton).toBeVisible();
});
