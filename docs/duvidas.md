# Pontos de Atenção - Dúvidas e Alinhamentos com o PO

## 1. Validação de cupons

**Cenário:** CT-006: Aplicar cupom com espaço no meio.

A história não especifica explicitamente a mensagem esperada para esse cenário. Entretanto, o CT-006 prevê a exibição da mensagem `Cupom inválido.` e a não aplicação do desconto.

| Campo | Informação |
|---|---|
| Caso de teste | CT-006 |
| Categoria | Regra de Negócio |
| Prioridade | P2 |
| Critério de aceitação | CA03 |
| Resultado esperado | Exibir `Cupom inválido.` e não aplicar desconto |
| Status | ✅ Passou |

**Alinhamento necessário com o PO:**
- Confirmar se a mensagem `Cupom inválido.` é a resposta esperada para cupons que contenham espaços internos.
- Confirmar se o comportamento esperado seria tratar o espaço interno e aceitar o cupom de desconto, assim como acontece quando o cupom é inserido com espaço no começo e no final.

## 2. Validade de cupons
### 2.1. Cupom expirado no limite da validade

**Contexto:** O único cupom expirado disponível para os testes é `VERAO2026`, cuja validade terminou em 31/03/2026.

**Ponto de atenção:** Não é possível validar o comportamento do cupom no último dia de validade utilizando apenas os dados disponíveis.

**Alinhamento necessário com o PO:**
- Disponibilizar um cupom de teste com data de validade controlada.
- Confirmar se o cupom deve ser aceito durante todo o último dia informado ou se expira no início dessa data.
- Definir o comportamento esperado após o vencimento, considerando a data e o horário utilizados pelo sistema.


## 3. Validação de CEP

### 3.1. CEP com quantidade de caracteres inválida

**Cenário:** CT-025 - Informar CEP com quantidade de caracteres inválida.

A documentação não especifica qual mensagem deve ser apresentada quando o usuário informa um CEP com mais de oito caracteres. 

| Campo | Informação |
|---|---|
| Caso de teste | CT-025 |
| Categoria | Validação |
| Prioridade | P2 |
| Critério de aceitação | Regra existente |
| Resultado esperado | CEP rejeitado |
| Status | ⏳ Não executado |

**Alinhamento necessário com o PO:**
- Confirmar se existe uma mensagem específica para CEP com quantidade de caracteres inválida.
- Definir se a validação deve ocorrer durante a digitação ou após o envio do CEP.


## 4 Carrinho esvaziado com cupom aplicado 
### 4.1 Cenário: Carrinho esvaziado com cupom aplicado.

**Ponto de atenção:** O comportamento esperado não está especificado.

**Alinhamento necessário com o PO:**

- Definir se o cupom deve ser removido quando todos os itens forem excluídos do carrinho.
- Definir o comportamento esperado caso o usuário adicione novos produtos posteriormente.
- Confirmar se o desconto deve ser recalculado ou se o cupom precisa ser aplicado novamente.
