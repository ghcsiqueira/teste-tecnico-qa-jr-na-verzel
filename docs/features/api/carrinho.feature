
# language: pt

Funcionalidade: Calcular valores do carrinho de compras
    Como cliente da Verzel Store
    Quero calcular os valores do meu carrinho
    Para saber o subtotal, os descontos, o frete e o valor total da compra

Cenário: Calcular subtotal, desconto e frete grátis corretamente
    Dado que adiciono ao carrinho o produto "P002" com quantidade 1
    E adiciono ao carrinho o produto "P004" com quantidade 2
    E informo o cupom de desconto "BEMVINDO10"
    Quando solicito o cálculo do carrinho
    Então a API deve retornar o status HTTP 200
    E o subtotal deve ser R$ 239,70
    E o desconto deve ser R$ 23,97
    E o valor do frete deve ser R$ 0,00
    E o frete grátis deve estar habilitado
    E o valor faltante para obter frete grátis deve ser R$ 0,00
    E o valor total da compra deve ser R$ 215,73

Cenário: Cobrar frete quando o subtotal for inferior a R$ 200,00
    Dado que adiciono ao carrinho o produto "P002" com quantidade 1
    E não informo um cupom de desconto
    Quando solicito o cálculo do carrinho
    Então a API deve retornar o status HTTP 200
    E o subtotal deve ser R$ 139,90
    E o valor do frete deve ser R$ 19,90
    E o frete grátis deve estar desabilitado
    E o valor faltante para obter frete grátis deve ser R$ 60,10
    E o valor total da compra deve ser R$ 159,80