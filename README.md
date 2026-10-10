# Desafio Técnico QA Júnior - Verzel Store

## 1. Introdução

Este repositório reúne os artefatos e os testes desenvolvidos para o desafio técnico da vaga de **QA Júnior na Verzel**. O projeto contempla testes manuais documentados, cenários escritos em Gherkin e testes automatizados para validar funcionalidades da Verzel Store.

A estratégia inclui duas frentes de automação:

- **Testes de interface (UI):** utilizam Playwright para verificar fluxos e interações pela perspectiva do usuário.
- **Testes de API:** utilizam Mocha, Supertest e Chai para enviar requisições HTTP e validar códigos de status e dados das respostas.

Os testes cobrem funcionalidades como carrinho de compras, listagem de produtos, cupons, frete, quantidade de produtos e pedidos.

## 2. Tecnologias utilizadas

| Tecnologia | Objetivo |
|---|---|
| JavaScript | Linguagem utilizada para implementar os testes automatizados. |
| Node.js | Ambiente para executar JavaScript fora do navegador. |
| npm | Instala as dependências e executa scripts definidos no projeto. |
| Playwright | Automatiza testes de interface em navegador. |
| Mocha | Organiza e executa os testes automatizados de API. |
| Supertest | Realiza requisições HTTP durante os testes de API. |
| Chai | Fornece as assertions utilizadas para comparar os resultados obtidos com os esperados. |
| Cucumber | Permite executar cenários BDD escritos em arquivos `.feature`, desde que as definições de passos e a configuração estejam disponíveis. |
| Gherkin | Formato declarativo utilizado para descrever cenários de teste em linguagem estruturada. |
| dotenv | Carrega variáveis de ambiente a partir de um arquivo `.env`. |
| Git e GitHub | Versionamento e hospedagem do repositório. |

## 3. Estrutura do repositório

```text
.
├── docs/
│   ├── Evidencias/                 # evidências organizadas por funcionalidade
│   ├── features/
│   │   ├── api/
│   │   │   ├── carrinho.feature
│   │   │   ├── lista-produtos.feature
│   │   │   └── pedidos.feature
│   │   └── ui/
│   │       ├── cupons.feature
│   │       ├── frete.feature
│   │       └── outros cenários de UI (*.feature)
│   ├── BUG.md
│   ├── duvidas.md
│   └── test-plan-execucao.md
├── tests/
│   ├── api/
│   │   ├── carrinho.test.js
│   │   ├── lista-produtos.test.js
│   │   └── pedidos.test.js
│   └── ui/
│       ├── carrinho.spec.js
│       ├── cupons.spec.js
│       ├── frete.spec.js
│       └── pedido.spec.js
├── .env                 # arquivo local; não deve ser versionado
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

> A árvore resume a organização de `docs/`; os cenários de UI e as pastas de evidências incluem outros itens por funcionalidade. Consulte os nomes completos diretamente no repositório.

## 4. Objetivo de cada grupo de arquivos

### `docs/Evidencias/`

Armazena as evidências dos testes manuais, separadas por funcionalidade. Essa organização facilita relacionar capturas de tela e registros aos casos de teste documentados.

As pastas estão organizadas por funcionalidade, incluindo checkout e cálculo, cupons, dados do cliente, frete e quantidade de produtos. Consulte os nomes completos dos diretórios no repositório.

### `docs/features/`

Reúne cenários de teste escritos em Gherkin. A separação por `api/` e `ui/` diferencia os cenários relacionados aos serviços daqueles voltados à interface.

**`docs/features/api/`**

- `carrinho.feature`: cenários da API relacionados ao cálculo do carrinho.
- `lista-produtos.feature`: cenários da listagem e consulta de produtos.
- `pedidos.feature`: cenários relacionados a pedidos.

**`docs/features/ui/`**

- `cupons.feature`: cenários de aplicação e validação de cupons na interface.
- Cenários de dados do cliente e finalização da compra: validam informações inseridas e o fluxo de conclusão do pedido.
- `frete.feature`: cenários relacionados às regras de frete.
- Cenários de quantidade de produtos: validam a alteração da quantidade no carrinho.

### `docs/BUG.md`

Documento destinado a registrar defeitos identificados durante a análise ou execução dos testes, incluindo informações que ajudem a reproduzir e acompanhar cada problema.

### `docs/duvidas.md`

Centraliza dúvidas e pontos que precisam de esclarecimento sobre os requisitos ou o comportamento esperado da aplicação.

### `docs/test-plan-execucao.md`

Documenta o plano e o acompanhamento da execução dos testes. Pode centralizar identificadores dos casos, prioridade, status, resultado esperado, resultado obtido e links para evidências.

### `tests/api/`

Contém os testes automatizados de API escritos em JavaScript. Os arquivos utilizam Mocha para organizar a suíte, Supertest para enviar requisições e Chai para validar as respostas.

- `carrinho.test.js`: testa o cálculo do carrinho, incluindo subtotal, desconto, frete e total.
- `lista-produtos.test.js`: testa a listagem de produtos e a consulta por identificador, incluindo respostas de sucesso e erro.
- `pedidos.test.js`: reúne cenários relacionados ao fluxo de pedidos.

### `tests/ui/`

Contém os testes de interface escritos para o Playwright. Os arquivos `.spec.js` validam fluxos e comportamentos da loja por meio do navegador.

- `carrinho.spec.js`: valida interações com o carrinho e o resumo do pedido.
- `cupons.spec.js`: valida os cenários de cupons.
- `frete.spec.js`: valida o comportamento relacionado ao frete.
- `pedido.spec.js`: reúne testes de interface relacionados a pedidos.

### Arquivos de configuração

- **`.env`**: armazena configurações locais, como a URL base usada nos testes de API. Não deve ser enviado ao repositório.
- **`.gitignore`**: exclui do versionamento itens como `node_modules/`, `.env`, `playwright-report/` e `test-results/`.
- **`package.json`**: declara as dependências e os scripts de execução do projeto.
- **`package-lock.json`**: registra a resolução das dependências para instalações consistentes.
- **`playwright.config.ts`**: configura a suíte do Playwright, incluindo o diretório `tests`, a URL base da aplicação, o relatório HTML e o projeto de navegador `chrome`.

## 5. Instalação do projeto

### Pré-requisitos

Instale o [Node.js](https://nodejs.org/) (que inclui o npm) e o [Git](https://git-scm.com/).

### 5.1. Clonar o repositório

```bash
git clone https://github.com/ghcsiqueira/teste-tecnico-qa-jr-na-verzel.git
cd teste-tecnico-qa-jr-na-verzel
```

### 5.2. Instalar as dependências

Na raiz do projeto, execute:

```bash
npm install
```

### 5.3. Instalar o navegador do Playwright

O projeto utiliza o canal Chrome. Instale os navegadores/dependências necessários para a configuração local:

```bash
npx playwright install chromium
```

Se a configuração `channel: 'chrome'` exigir o Google Chrome instalado no computador, instale o navegador Chrome separadamente.

### 5.4. Configurar a variável de ambiente `BASE_URL`

Crie um arquivo `.env` na raiz do projeto, no mesmo nível do `package.json`, com o conteúdo:

```dotenv
BASE_URL=https://verzel-store.qa-test-verzel-store.workers.dev
```

A variável `BASE_URL` define a URL usada como base pelas requisições de API. O `.env` está listado no `.gitignore`; mantenha-o local e não versione valores sensíveis.

**Atenção ao carregamento do `.env`:** os arquivos atuais de `tests/api/` chamam `dotenv.config()` com o caminho `../../.env`. Como os comandos deste README são executados a partir da raiz do repositório, confira esse caminho. Para carregar o `.env` da raiz ao executar os testes a partir dela, a forma usual é `require('dotenv').config();` em cada arquivo de teste de API.

## 6. Como executar os testes

> **Playwright e Mocha são executados por comandos diferentes.** Os comandos do Playwright executam os testes de interface (`tests/ui/`); os comandos do Mocha executam os testes de API (`tests/api/`).

### 6.1. Testes de interface com Playwright

**Executar os testes do Playwright:**

```bash
npm test
```

O script `test` está configurado como `playwright test` no `package.json`.

**Executar no projeto Chrome com navegador visível:**

```bash
npx playwright test --headed
```

**Abrir o Playwright Codegen:**

```bash
npm run codegen
```

O Codegen abre a aplicação no navegador configurado para ajudar a registrar interações e gerar exemplos de automação.

**Abrir o relatório HTML**, após uma execução que tenha gerado o relatório:

```bash
npx playwright show-report
```

### 6.2. Testes de API com Mocha, Supertest e Chai

O `package.json` atual não contém um script npm dedicado à execução dos testes de API. Para executá-los diretamente com Mocha, use este comando na raiz do projeto:

```bash
npx mocha "tests/api/**/*.test.js"
```

O padrão acima seleciona os arquivos `*.test.js` dentro de `tests/api/`. O Mocha executará os testes; o Supertest fará as requisições HTTP e o Chai avaliará as assertions.

Para simplificar a execução futura, você pode adicionar o seguinte script à propriedade `scripts` do `package.json`:

```json
"test:api": "mocha \"tests/api/**/*.test.js\""
```

Depois de salvar o `package.json`, execute a suíte de API com:

```bash
npm run test:api
```


## 7. Resumo dos comandos

| Objetivo | Comando |
|---|---|
| Instalar dependências | `npm install` |
| Instalar Chromium | `npx playwright install chromium` |
| Executar testes de UI com Playwright | `npm test` |
| Executar Playwright no Chrome visível | `npm run test:chrome` |
| Abrir Playwright Codegen | `npm run codegen` |
| Exibir relatório HTML do Playwright | `npx playwright show-report` |
| Executar testes de API com Mocha | `npx mocha "tests/api/**/*.test.js"` |
| Executar API por script npm (após adicioná-lo) | `npm run test:api` |

## 8. Considerações finais

O projeto combina documentação de QA, evidências de testes manuais, cenários gherkin e automação de interface e API. A separação das suítes permite validar tanto os fluxos visíveis ao usuário quanto as respostas dos serviços, contribuindo para uma avaliação mais abrangente da qualidade da aplicação.

Repositório: [teste-tecnico-qa-jr-na-verzel](https://github.com/ghcsiqueira/teste-tecnico-qa-jr-na-verzel)
