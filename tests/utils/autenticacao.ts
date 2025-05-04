import { test as base, expect } from '@playwright/test';


export const test = base.extend({
  // executa antes de cada teste
  page: async ({ page }, use) => {
    await page.goto('https://app.orcamentopessoal.net/auth/signin');

    await page.fill('#email', 'viniciushenriqueoliveirasantos@gmail.com');
    await page.click('button:has-text("Continuar")');

    await page.fill('#password', '@Erp12345');
    await page.click('#btnEntrar');

    await expect(page.locator('text=Orçamento Pessoal')).toBeVisible();

    await use(page);

    // executa depois de cada teste
    try {
      await page.click('a[dropdown-open]');
      await page.click('text=Finalizar Sessão');
      await expect(page).toHaveURL(/signin/);
    } catch (error) {
      console.warn('Não foi possível executar o logout:', error);
    }
  }
});
