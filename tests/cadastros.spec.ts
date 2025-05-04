import { test, expect } from './utils/autenticacao'; // este já faz o login e logout automaticamente
import { criaNovoContato } from './utils/cadastros';

test('CriarNovoContato', async ({ page }) => {
  await criaNovoContato(page);


});
