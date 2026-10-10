# language: pt

Funcionalidade: Consultar produtos da Verzel 
  Como cliente da Verzel
  Quero consultar os produtos disponíveis
  Para visualizar seus dados 

  Cenário: Listar produtos com sucesso
    Quando solicito a listagem de produtos
    Então a API deve retornar o status HTTP 200
    E a resposta deve conter uma lista de produtos

  Cenário: Rejeitar método HTTP não permitido na listagem de produtos
    Quando envio uma requisição POST para "/api/produtos"
    Então a API deve retornar o status HTTP 405

  Cenário: Consultar um produto existente
    Dado que existe um produto com o identificador "P001"
    Quando consulto o produto "P001"
    Então a API deve retornar o status HTTP 200
    E o identificador do produto deve ser "P001"
    E o nome do produto deve ser "Camiseta Essencial"
    E a descrição deve ser "Algodão penteado e corte reto."
    E a categoria deve ser "Vestuário"
    E o preço do produto deve ser R$ 59,90

  Cenário: Consultar um produto inexistente
    Dado que não existe um produto com o identificador "P020"
    Quando consulto o produto "P020"
    Então a API deve retornar o status HTTP 404