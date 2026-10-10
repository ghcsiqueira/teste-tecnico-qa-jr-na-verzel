import { test, expect } from '@playwright/test';

test.only('Deve aplicar frete grátis com subtotal superior a R$ 200,00', async ({ page }) => { 
  // Arrange
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev'); 
  await expect(page.getByRole('heading', { name: 'Frete grátis a partir de R$' })).toBeVisible(); 

  // Act
  await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click(); 
  await expect(page.getByText('no carrinho')).toBeVisible(); 
  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click(); 
  await expect(page.getByRole('heading', { name: 'Carrinho' })).toBeVisible(); 
  await expect(page.getByText('Faltam R$ 140,10 para o frete')).toBeVisible(); 
  await page.getByRole('button', { name: 'Aumentar quantidade de' }).click(); 
  await expect(page.getByText('Faltam R$ 80,20 para o frete')).toBeVisible(); 
  await page.getByRole('button', { name: 'Aumentar quantidade de' }).click(); 
  await expect(page.getByText('Faltam R$ 20,30 para o frete')).toBeVisible(); 
  await page.getByRole('button', { name: 'Aumentar quantidade de' }).click(); 
  await page.getByText('FreteGrátis').click(); 
  await page.getByRole('link', { name: 'Finalizar compra' }).click(); 

  // Assert
  await expect(page.getByRole('heading', { name: 'Finalizar compra' })).toBeVisible(); 
});
