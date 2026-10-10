# Testes Manuais - Verzel Store

## 1. Objetivo

Validar as principais regras funcionais da Verzel Store,
com foco em cupons, cálculo de frete, carrinho e checkout.

## 2. Escopo

- Aplicação de cupons
- Cálculo de desconto
- Cálculo de frete
- Limite de quantidade por produto
- Dados do cliente
- Finalização do pedido

## 3. Estratégia

Os testes foram derivados dos critérios de aceitação(CA) da
história de usuário.

Foram priorizados:

- Fluxos críticos
- Regras de negócio
- Valor limite
- Dados inválidos
- Cenários negativos


## 4.1 Cupons

| ID | Caso de teste | Tipo | Prioridade | Critério | Resultado Esperado | Resultado Obtido | Status | Evidências |
|---|---|---|---|---|---|---|---|---|
| CT-001 | Aplicar cupom válido `BEMVINDO10` | Smoke / Regra de Negócio | P1 | CA01 | Desconto de 10% aplicado sobre o subtotal | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT01/evidencia.png) |
| CT-002 | Aplicar cupom utilizando letras minúsculas | Regra de Negócio | P2 | CA02 | Cupom aceito e desconto de 10% aplicado | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT02/evidencia-1.png) |
| CT-003 | Aplicar cupom com espaços no início | Regra de Negócio | P2 | CA02 | Espaços iniciais ignorados e cupom aceito | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT03/evidencia-1.png) |
| CT-004 | Aplicar cupom com espaços no final | Regra de Negócio | P2 | CA02 | Espaços finais ignorados e cupom aceito | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT04/evidencia-1.png) |
| CT-005 | Aplicar cupom com espaços no início e no final | Regra de Negócio | P2 | CA02 | Espaços ignorados e cupom aceito | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT05/evidencia-1.png) |
| CT-006 | Aplicar cupom com espaço no meio | Regra de Negócio | P2 | CA03 | Exibir "Cupom inválido." e não aplicar desconto | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT06/evidencia.png) |
| CT-007 | Aplicar cupom inválido | Validação / Regra de Negócio | P1 | CA03 | Exibir "Cupom inválido." e não aplicar desconto | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT07/evidencia.png) |
| CT-008 | Aplicar cupom expirado | Validação / Regra de Negócio | P1 | CA04 | Exibir "Cupom expirado." e não aplicar desconto | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT08/evidencia.png) |
| CT-009 | Aplicar cupom vazio | Validação | P2 | - | Cupom não aplicado e sistema deve tratar a entrada conforme regra definida | ⚠️ Bloqueado | ⚠️ | [Evidência](./Evidencias/CUPOM/CT09/evidencia.png) |
| CT-010 | Remover cupom aplicado | Regra de Negócio | P2 | CA05 | Cupom removido e desconto retirado do cálculo | ✅ Passou | ✅ | [Evidência](./Evidencias/CUPOM/CT10/evidencia-1.png) |

---

## 4.2 Frete

| ID | Caso de teste | Tipo | Prioridade | Critério | Resultado Esperado | Resultado Obtido | Status | Evidências |
|---|---|---|---|---|---|---|---|---|
| CT-011 | Aplicar frete grátis com subtotal exatamente igual a R\$ 200,00 | Smoke / Regra de Negócio | P1 | CA06 | Frete calculado como R\$ 0,00 | O frete grátis não foi aplicado automaticamente | ❌ Falhou | [Evidência](./Evidencias/FRETE/CT11/evidencia.png) |
| CT-012 | Aplicar frete de R\$ 19,90 com subtotal abaixo de R\$ 200,00 | Smoke / Regra de Negócio | P1 | CA07 | Frete calculado como R\$ 19,90 | Funcionou conforme esperado | ✅ Passou | [Evidência](./Evidencias/FRETE/CT12/evidencia.png) |
| CT-013 | Exibir valor restante para atingir frete grátis | Regra de Negócio | P2 | CA07 | Sistema informa quanto falta para atingir R\$ 200,00 | Funcionou conforme esperado | ✅ Passou | [Evidência](./Evidencias/FRETE/CT13/evidencia.png) |
| CT-014 | Aplicar frete grátis com subtotal superior a R\$ 200,00 | Regra de Negócio | P1 | CA06 | Frete calculado como R\$ 0,00 | Funcionou conforme esperado | ✅ Passou | [Evidência](./Evidencias/FRETE/CT14/evidencia.png) |
| CT-015 | Garantir que o desconto não seja aplicado sobre o frete | Regra de Negócio Crítica | P1 | CA09 | Desconto calculado somente sobre o subtotal dos produtos | uncionou conforme esperado| ✅ Passou | [Evidência](./Evidencias/FRETE/CT15/evidencia.png) |

---

## 4.3 Quantidade de produtos

| ID | Caso de teste | Tipo | Prioridade | Critério | Resultado Esperado | Resultado Obtido | Status | Evidências |
|---|---|---|---|---|---|---|---|---|
| CT-016 | Adicionar exatamente 5 unidades do mesmo produto | Regra de Negócio | P1 | CA10 | 5 unidades aceitas | Funcionou conforme esperado | ✅ Passou | [Evidência](./Evidencias/QUANTIDADE-DE-PRODUTOS/CT16/evidencia.png) |
| CT-017 | Tentar adicionar 6 unidades do mesmo produto | Validação / Regra de Negócio | P1 | CA10 | Sexta unidade rejeitada e limite informado | Não executado | ⏳ Não executado | - |


---

## 4.4 Dados do cliente e finalizar compra

| ID | Caso de teste | Tipo | Prioridade | Critério | Resultado Esperado | Resultado Obtido | Status | Evidências |
|---|---|---|---|---|---|---|---|---|
| CT-018 | Finalizar compra com os campos de nome completo, e-mail e cep vazios | - | - | - | Sistema rejeita o processo e apresenta mensagem de campos obrigatórios | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT18/evidencia.png) |
| CT-019 | Informar nome sem sobrenome | Validação | P2 | Regra existente | Sistema rejeita o nome e solicita nome completo | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT19/evidencia.png) |
| CT-020 | Não informar nome | Validação | P2 | Regra existente | Sistema impede a continuidade e solicita o nome | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT20/evidencia.png) |
| CT-021 | Informar e-mail inválido | Validação | P2 | Regra existente | Sistema rejeita o e-mail inválido | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT21/evidencia.png) |
| CT-022 | Não informar e-mail | Validação | P2 | Regra existente | Sistema impede a continuidade e solicita o e-mail | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT22/evidencia.png) |
| CT-023 | Informar CEP com 8 dígitos | Regra de Negócio | P2 | Regra existente | CEP aceito | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT23/evidencia.png) |
| CT-024 | Informar CEP com hífen | Regra de Negócio | P2 | Regra existente | CEP aceito | ✅ Passou | ✅ | [Evidência](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT24/evidencia.png) |
| CT-025 | Informar CEP com quantidade de caracteres inválida | Validação | P2 | Regra existente | CEP rejeitado | ✅ Passou | ✅ | [Evidencia](./Evidencias/DADOS-DO-CLIENTE-E-FINALIZAR-COMPRA/CT25/evidencia.png) |

---

## 4.5 Checkout e cálculo

| ID | Caso de teste | Tipo | Prioridade | Critério | Resultado Esperado | Resultado Obtido | Status | Evidências |
|---|---|---|---|---|---|---|---|---|
| CT-026 | Finalizar pedido com dados válidos | Smoke | P1 | Fluxo principal | Pedido finalizado com sucesso | ✅ Passou | ✅ | [Evidencia](./Evidencias/CHECKOUT-E-CALCULO/CT26/evidencia.png) |
| CT-027 | Finalizar pedido sem aplicar cupom | Smoke / Regra de Negócio | P1 | - | Pedido finalizado sem desconto de cupom | ✅ Passou | ✅ | [Evidencia](./Evidencias/CHECKOUT-E-CALCULO/CT27/evidencia.png) |



## 5. Automação

Os cenários abaixo foram selecionados para automação
com Playwright:

| ID | Cenário | Automação |
|---|---|---|
| CT-001 | Aplicar cupom válido | ✅ |
| CT-008 | Cupom expirado | ✅ |
| CT-014 | Frete grátis acima de R$ 200 | ✅ |
| CT-016 | Adicionar exatamente 5 unidades do mesmo produto | ✅ |