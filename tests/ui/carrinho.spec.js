import { test, expect } from '@playwright/test';


test.describe('Cupons', () => {

  // Arrange
  test.beforeEach(async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');
    await expect(page.getByRole('heading', { name: 'Frete grátis a partir de R$' })).toBeVisible();
  });

  test('Deve adicionar produto ao carrinho e verificar o resumo do pedido', async ({ page }) => {

    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();

    await expect(page.getByText('no carrinho')).toBeVisible();

    await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();

    await expect(page.getByRole('region')).toMatchAriaSnapshot(`
        - region "Resumo do pedido":
          - heading "Resumo do pedido" [level=2]
          - term: Subtotal
          - definition: /R\\$ \\d+,\\d+/
          - term: Desconto
          - definition: /R\\$ \\d+,\\d+/
          - term: Frete
          - definition: /R\\$ \\d+,\\d+/
          - term: Total
          - definition: /R\\$ \\d+,\\d+/
          - paragraph: /Faltam R\\$ \\d+,\\d+ para o frete grátis\\./
          - link "Finalizar compra":
            - /url: /checkout
        `);
  });


  test('Deve adicionar 5 produtos ao carrinho e validar a mensagem de limite de produtos', async ({ page }) => {

    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();

    await expect(page.getByText('no carrinho')).toBeVisible();

    await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
    await page.getByRole('button', { name: 'Aumentar quantidade de' }).click();
    await page.getByRole('button', { name: 'Aumentar quantidade de' }).click();
    await page.getByRole('button', { name: 'Aumentar quantidade de' }).click();
    await page.getByRole('button', { name: 'Aumentar quantidade de' }).click();
    
    await expect(page.getByText('Limite de 5 unidades por')).toBeVisible();
  });
});