# language: pt
Funcionalidade: Dados do cliente e finalização da compra
    Como cliente da loja Verzel
    Quero informar meus dados ao finalizar a compra
    Para concluir meu pedido

Cenário: Finalizar compra com os campos de nome completo, e-mail e CEP vazios
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que os campos de nome completo, e-mail e CEP estão vazios
    Quando tento finalizar a compra
    Então o sistema deve rejeitar o processo
    E deve apresentar a mensagem de campos obrigatórios

Cenário: Informar nome sem sobrenome
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que informo apenas o primeiro nome no campo de nome completo
    E que os demais campos estão preenchidos corretamente
    Quando tento finalizar a compra
    Então o sistema deve rejeitar o nome
    E deve solicitar "Informe o nome completo"

Cenário: Não informar o nome
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que não informo o nome completo
    E que os demais campos estão preenchidos corretamente
    Quando tento finalizar a compra
    Então o sistema deve rejeitar
    E deve solicitar "Informe o nome completo"

Cenário: Informar e-mail inválido
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que informo o e-mail <e-mail>
    E que os demais campos estão preenchidos corretamente
    Quando tento finalizar a compra
    Então o sistema deve rejeitar
    E deve solicitar "Informe um e-mail válido."

Cenário: Informar CEP com 8 dígitos 
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que informo o CEP "54400235"
    E que os demais campos estão preenchidos corretamente
    Quando tento finalizar a compra
    Então o CEP deve ser aceito

Cenário: Informar CEP com hífen
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que informo o CEP "54400-235"
    E que os demais campos estão preenchidos corretamente
    Quando tento finalizar a compra
    Então o CEP deve ser aceito

Cenário: Informar CEP com quantidade de caracteres inválido
    Dado que possuo produtos no carrinho
    E que estou na etapa de dados do cliente
    E que informo o CEP <cep>
    E que os demais campos estão preenchidos corretamente
    Quando tento finalizar a compra
    Então o CEP deve ser rejeitado
    E deve solicitar "Informe um CEP com 8 dígitos."

    Exemplos:
        | cep   |
        | 5003023   |
        | 500302300 |
        | 50030-23  |
        | 50030-2300 |