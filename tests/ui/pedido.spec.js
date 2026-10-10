import { test, expect } from '@playwright/test';


test('Deve finalizar pedido com sucesso', async ({ page }) => {

    // Arrange
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');
    await expect(page.getByRole('heading', { name: 'Frete grátis a partir de R$' })).toBeVisible();

    // Act
    await page
        .getByRole('article', { name: 'Tênis Casual Urbano' })
        .getByRole('button')
        .click();

    await page
        .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
        .click();

    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: 'Nome completo' })
        .fill('Gustavo Siqueira');

    await page.getByRole('textbox', { name: 'E-mail' })
        .fill('gsiqueirahc@gmail.com');

    await page.getByRole('textbox', { name: 'CEP' })
        .fill('53040000');

    await page.getByRole('button', { name: 'Confirmar pedido' }).click();

    // Assert
    await expect(page.getByText('Pedido confirmado')).toBeVisible();

    await expect(page.getByRole('region')).toMatchAriaSnapshot(`
          - region "Itens do pedido":
            - heading "Itens do pedido" [level=2]
            - term: Subtotal
            - definition: /R\\$ \\d+,\\d+/
            - term: Desconto
            - definition: /R\\$ \\d+,\\d+/
            - term: Frete
            - definition: /R\\$ \\d+,\\d+/
            - term: Total
            - definition: /R\\$ \\d+,\\d+/
            - list:
              - listitem: /1x Tênis Casual Urbano R\\$ \\d+,\\d+/
        `);
});