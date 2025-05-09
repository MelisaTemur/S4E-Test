import { test, expect } from '@playwright/test';

test('Sayfa yüklenemediğinde hata mesajı görüntülenmeli', async ({ page }) => {
  await page.goto('https://s4e.io/nonexistent-page');
  const errorMessage = await page.locator('text=404 Not Found');
  await expect(errorMessage).toBeVisible(); 
});

test('Sayfa geri gitme işlemi yaparken düzgün şekilde dönmeli', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  
  const scanNowButton = page.locator('button:has-text("Scan Now")');
  await scanNowButton.click(); 
  await page.goBack(); 
  const toolsPageTitle = page.locator('h1:has-text("Free Security Tools")');
  await expect(toolsPageTitle).toBeVisible();
});

test('Geçersiz URL hatalı sayfa yönlendirmesi yapmalı', async ({ page }) => {
  await page.goto('https://s4e.io/invalid-url');
  const errorMessage = await page.locator('text=Page not found');
  await expect(errorMessage).toBeVisible();
});

test('Ağ bağlantısı kesildiğinde sayfa düzgün şekilde hata vermeli', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  await page.context().setOffline(true); 
  const errorMessage = await page.locator('text=Network Error');
  await expect(errorMessage).toBeVisible();
  await page.context().setOffline(false); 
});

test('Sayfa beklenmeyen bir öğe içerdiğinde hata vermeli', async ({ page }) => {
  await page.goto('https://s4e.io/free-security-tools');
  const incorrectTitle = page.locator('h1:has-text("Incorrect Title")');
  await expect(incorrectTitle).not.toBeVisible(); 
});
