# language: pt
Funcionalidade: Aplicação de cupons de desconto

Como cliente da Verzel
Quero aplicar um cupom de desconto 
Para obter desconto na minha compra

  Cenário: Aplicar cupom válido
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o cupom "BEMVINDO10"
    E aplica o cupom
    Então o desconto de 10% deve ser aplicado sobre o subtotal
    E o desconto não deve ser aplicado sobre o frete
    E o total da compra deve ser R$ 109,90

  Cenário: Aceitar cupom válido independente de letras maiusculas e minusculas
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o <cupom>
    E aplica o cupom
    Então o desconto de 10% deve ser aplicado sobre o subtotal
    E o desconto não deve ser aplicado sobre o frete
    E o total da compra deve ser R$ 109,90

    Exemplos:
      | cupom      |
      | bemvindo10 |
      | BemVindo10 |
      | BEMVINDO10 |

  Cenário: Aceitar cupom de desconto com espaços no ínicio
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o <cupom>
    E aplica o cupom
    Então o desconto de 10% deve ser aplicado sobre o subtotal
    E o desconto não deve ser aplicado sobre o frete
    E o total da compra deve ser R$ 109,90

    Exemplos:
      | cupom      |
      |  BEMVINDO10 |

  Cenário: Aceitar cupom de desconto com espaços no final
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o <cupom>
    E aplica o cupom
    Então o desconto de 10% deve ser aplicado sobre o subtotal
    E o desconto não deve ser aplicado sobre o frete
    E o total da compra deve ser R$ 109,90

    Exemplos:
      | cupom      |
      | BEMVINDO10  |

  Cenário: Aplicar cupom com espaços no início e no final
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o <cupom>
    E aplica o cupom
    Então o desconto de 10% deve ser aplicado sobre o subtotal
    E o desconto não deve ser aplicado sobre o frete
    E o total da compra deve ser R$ 109,90

    Exemplos:
      | cupom      |
      |  BEMVINDO10  |

  Cenário: Rejeitar cupom inválido
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o cupom "Inválido"
    E aplica o cupom
    Então uma mensagem de cupom inválido deve ser apresentada
    E nenhum desconto deve ser aplicado

  Cenário: Aplicar cupom expirado
    Dado que o carrinho tem subtotal de R$ 100,00 e frete de R$ 19,90
    Quando o cliente informa o cupom "VERAO2026"
    E aplica o cupom
    Então uma mensagem de Cupom expirado deve ser apresentada
    E nenhum desconto deve ser aplicado
