# language: pt

Funcionalidade: Limite de quantidade de produto no carrinho
    Como cliente da loja Verzel
    Quero ser informado sobre o limite de unidades por produto
    Para saber quantas unidades posso adicionar ao carrinho

Cenário: Adicionar unidades do mesmo produto um por um, abaixo do limite
    Dado que o carrinho possui <quantidade_atual> unidade(s) desse produto
    Quando adiciono mais 1 unidade desse produto ao carrinho
    Então o carrinho deve conter <quantidade_final> unidade(s) desse produto
    E nenhuma mensagem de erro deve ser exibida

    Exemplos:
        | quantidade_atual | quantidade_final |
        | 1                | 2                |
        | 2                | 3                |
        | 3                | 4                | 

Cenário: Adicionar exatamente 5 unidades do mesmo produto
    Dado que o carrinho possui 4 unidades de um produto
    Quando adiciono mais uma unidade desse produto ao carrinho
    Então o carrinho deve conter 5 unidades desse produto
    E a mensagem "Limite de 5 unidades por produto" deve ser exibida
     