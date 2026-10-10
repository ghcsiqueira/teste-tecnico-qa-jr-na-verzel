import { test, expect } from '@playwright/test';


test.describe('Cupons', () => {

    // Arrange
    test.beforeEach(async ({ page }) => {
        await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');
        await expect(page.getByRole('heading', { name: 'Frete grátis a partir de R$' })).toBeVisible();
    });

    test('Deve aplicar cupom válido', async ({ page }) => {
        
        await page.getByRole('article', { name: 'Calça Jeans Slim' }).getByRole('button').click();
        await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
        await page.getByRole('textbox', { name: 'Cupom de desconto' }).click();
        await page.getByRole('textbox', { name: 'Cupom de desconto' }).fill('bemvindo10');
        await page.getByRole('button', { name: 'Aplicar cupom' }).click();

        await expect(page.getByText('Cupom BEMVINDO10 aplicado.')).toBeVisible();
        await expect(page.getByText('Desconto (BEMVINDO10)- R$')).toBeVisible();
    });

    test('Deve aplicar cupom expirado', async ({ page }) => {
        
        await page.getByRole('article', { name: 'Calça Jeans Slim' }).getByRole('button').click();
        await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
        await page.getByRole('textbox', { name: 'Cupom de desconto' }).click();
        await page.getByRole('textbox', { name: 'Cupom de desconto' }).fill('VERAO2026');
        await page.getByRole('button', { name: 'Aplicar cupom' }).click();

        await expect(page.getByText('Cupom expirado.')).toBeVisible();
        
    });
});