import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://app.orcamentopessoal.net/auth/signin');

  await page.fill('#email', 'viniciushenriqueoliveirasantos@gmail.com');
  await page.click('button:has-text("Continuar")');

  await page.fill('#password', '@Erp12345');
  await page.click('#btnEntrar');

  // Aguarda a home carregar
  await expect(page.locator('text=Orçamento Pessoal')).toBeVisible();
});

test('Verifica se o dashboard está visível', async ({ page }) => {
  
  await page.click('a[href="/contatos"]');
  await page.click('button:has-text("Novo Contato")');


});
