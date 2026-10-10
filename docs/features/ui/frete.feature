# language: pt

Funcionalidade: Calculo de frete no carrinho
    Como cliente da loja Verzel
    Quero que o frete seja calculado de acordo com o subtotal
    Para saber o valor final da minha compra

Cenário: Aplicar frete grátis com subtotal exatamente igual à R$ 200,00
    Dado que estou na página do carrinho de compras
    E que o subtotal dos produtos no carrinho é R$ 200,00.
    Quando o sistema calcula o frete
    Então o frete deve ser calculado como R$ 0,00

Cenário: Aplicar frete de R$ 19,90 com subtotal abaixo de R$ 200,00
    Dado que estou na página do carrinho de compras
    E que o subtotal dos produtos no carrinho inferior a R$ 200,00.
    Quando o sistema calcula o frete
    Então o frete deve ser calculado como R$ 19,90

Cenário: Exibir valor restante para atingir frete grátis
    Dado que o subtotal dos produtos no carrinho é <subtotal> 
    Quando o sistema exibe o resumo no carrinho
    Então o sistema deve informar que faltam <valor_restante> para atingir R$ 200,00
    E o frete deve ser exibido como R$ 19,90

    Exemplos:

    | subtotal | valor_restante |
    | 50,00    | Faltam R$ 150,00 para o frete grátis |
    | 150,00   | Faltam R$ 50,00 para o frete grátis  |

Cenário: Garantir que o desconto não seja aplicado sobre o frete
    Dado que o carrinho possui produtos e um valor de frete a ser cobrado
    E que existe um desconto aplicável ao pedido
    Quando o sistema calcula o valor total do pedido
    Então o desconto deve ser calculado somente sobre o subtotal dos produtos
    E o valor do frete não deve ser afetado pelo desconto