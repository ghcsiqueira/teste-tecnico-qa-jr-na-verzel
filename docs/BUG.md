# BUG-011: Frete grátis não aplicado quando o subtotal é exatamente R$ 200,00

| Campo | Valor |
|---|---|
| **Caso de teste** | CT-011 |
| **Critério de aceite** | CA06 |
| **Tipo** | Regra de negócio / valor limite |
| **Prioridade do teste** | P1 |
| **Severidade sugerida** | Alta (regra de negócio de frete com impacto financeiro direto) |
| **Status** | Aberto |
| **Ambiente** | https://verzel-store.qa-test-verzel-store.workers.dev/|
| **Responsável** | Gustavo Siqueira |

## Descrição

No valor limite do CA06, com o subtotal exatamente igual a R$ 200,00, o sistema não aplicou a regra de frete grátis.

## Pré-condições

- Carrinho vazio
- Nenhum cupom aplicado

## Passos para reproduzir

1. Adicionar 2 unidades do produto **P005** ao carrinho (subtotal = R$ 200,00).
2. Não aplicar nenhum cupom.
3. Ir ao resumo do pedido / cálculo de frete.
4. Observar o valor do frete

## Resultado esperado

- Frete = **R$ 0,00**
- `freteGratis` = **true**

## Resultado obtido

- Frete = **R$ 19,90**
- `freteGratis` = **false**

## Evidências

- [evidencia.png](./Evidencias/FRETE/CT11/evidencia.png)

## Hipótese do problema

- A condição pode estar usando `>` em vez de `>=` na comparação com R$ 200,00.

