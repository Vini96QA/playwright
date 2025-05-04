import { Page, expect } from '@playwright/test';

export async function criaNovoContato(page: Page) {

    await page.click('a[href="/contatos"]');
    await page.click('button:has-text("Novo Contato")');

    await page.fill('input[name="nome"]', 'João Da Silva');
    await page.selectOption('select[name="categoria"]', { label: 'Prestadores de Serviço' });
    await page.fill('input[name="cep"]', '1440000');
    await page.fill('input[name="logradouro"]', 'Rua Vida Nova');
    await page.fill('input[name="numero"]', '98');
    await page.fill('input[name="complemento"]', 'Casa');
    await page.fill('input[name="bairro"]', 'Jardim Real');
    await page.fill('input[name="cidade"]', 'Franca');
    await page.fill('input[name="uf"]', 'SP');
    await page.fill('input[name="telefone"]', '(16)3725-8859');
    await page.fill('input[name="celular"]', '(16)99125-3658');
    await page.fill('input[name="email"]', 'teste123@gmail.com');

    await page.click('a.nav-link:has-text("Detalhes")');
    await page.fill('input#dataNascimento[name="dataNascimento"]', '08/08/1993');
    await page.selectOption('select[name="sexo"]', { label: 'Masculino' });
    await page.fill('input[name="cpf"]', '46966878524');
    await page.fill('input[name="naturalidade"]', 'Franca');
    await page.selectOption('select[name="estadoCivil"]', { label: 'Casado(a)' });
    await page.fill('input[name="rg"]', '589657742');
    await page.fill('input[name="orgaoEmissor"]', 'ssp');
    await page.fill('input[name="responsavel"]', 'Marcos Santos');
    await page.fill('input[name="profissao"]', 'Analista de Cadastro');
    await page.fill('textarea[name="observacoes"]', 'Bloqueado por falta de pagamento');

    await expect(page.locator('input[name="nome"]')).toHaveValue('João Da Silva');
    await expect(page.locator('input[name="email"]')).toHaveValue('teste123@gmail.com');

    await page.click('button:has-text("Salvar")');
    await expect(page.locator('text=Cadastro salvo com sucesso')).toBeVisible({ timeout: 5000 });
}
