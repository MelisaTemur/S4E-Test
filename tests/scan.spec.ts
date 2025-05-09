import { test, expect } from '@playwright/test';

test('Sayfa düzgün şekilde yüklenmeli ve 200 statüsü almalı', async ({ page }) => {
  const response = await page.goto('https://s4e.io/free-security-tools/scan', {
    waitUntil: 'domcontentloaded',  
  });

  expect(response).not.toBeNull(); 
  expect(response!.status()).toBe(200); 
});

test('IP adresi kontrolü yapılmalı ve doğru gösterilmeli', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools/scan', {
    waitUntil: 'domcontentloaded',
  });

  const ipText = await page.locator('text=Your IP address is');
  await expect(ipText).toBeVisible();
});

test('Tarama işlemi başladıktan sonra doğru sayfaya yönlendirilmeli', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools/scan', {
    waitUntil: 'domcontentloaded',
  });

  const scanButton = await page.locator('button:has-text("Start Scan")');
  await expect(scanButton).toBeVisible();

 
  const [response] = await Promise.all([
    page.waitForResponse('**/scan-result**'),  
    scanButton.click(),  
  ]);

 
  expect(response).not.toBeNull(); 
  expect(response!.url()).toContain('/scan-result');
  expect(response!.status()).toBe(200);
});
