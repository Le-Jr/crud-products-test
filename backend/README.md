# Backend - Hard Skill Test

## Descrição

Este é o backend do projeto **Hard Skill Test**, desenvolvido com **NestJS** e utilizando o banco de dados **PostgreSQL**. O backend fornece as APIs para gerenciar **produtos** e **categorias**, incluindo funcionalidades de criação, leitura, atualização e exclusão (CRUD).

A documentação da API está disponível através do **Swagger** na rota `/api` após a inicialização da aplicação.

---

## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=nest&theme=light)](https://skillicons.dev) - **NestJS**: Framework Node.js para a construção de APIs escaláveis e de fácil manutenção.

[![My Skills](https://skillicons.dev/icons?i=postgresql&theme=light)](https://skillicons.dev)- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações de produtos e categorias.

[![My Skills](https://skillicons.dev/icons?i=prisma&theme=light)](https://skillicons.dev)- **Prisma**: ORM para interagir com o banco de dados.

[![My Skills](https://skillicons.dev/icons?i=docker&theme=light)](https://skillicons.dev)- **Docker**: Utilizado para containerizar o backend e facilitar o desenvolvimento.

---

## Estrutura do Projeto

```bash
backend/
├── dist/                         # Pasta gerada após a compilação do TypeScript
├── Dockerfile                    # Arquivo de configuração do Docker para o backend
├── eslint.config.mjs             # Configuração do ESLint
├── generated/                    # Arquivos gerados pelo Prisma (schema, migrações)
├── nest-cli.json                 # Configuração do NestJS CLI
├── node_modules/                 # Dependências do projeto
├── package.json                  # Dependências do projeto
├── package-lock.json             # Controle de versão das dependências
├── prisma/                       # Configurações do Prisma
│   └── schema.prisma             # Definições do banco de dados com Prisma
├── README.md                     # Este arquivo
├── src/                          # Código-fonte da aplicação
│   ├── app.module.ts             # Módulo principal da aplicação
│   ├── main.ts                   # Arquivo de entrada da aplicação
│   ├── categories/               # Módulo de categorias
│   │   ├── category.controller.ts  # Controlador de categorias
│   │   ├── category.module.ts     # Módulo de categorias
│   │   └── category.service.ts    # Serviço de categorias
│   ├── products/                 # Módulo de produtos
│   │   ├── product.controller.ts  # Controlador de produtos
│   │   ├── product.module.ts      # Módulo de produtos
│   │   └── product.service.ts     # Serviço de produtos
│   ├── dto/                      # DTOs (fora dos módulos)
│   │   ├── category.dto.ts        # Data Transfer Object (DTO) de categoria
│   │   ├── product.dto.ts         # Data Transfer Object (DTO) de produto
│   │   ├── productpath.dto.ts     # Data Transfer Object (DTO) de caminho de produto
│   │   └── index.ts               # Arquivo de exportação dos DTOs
│   ├── prisma/                   # Módulo do Prisma
│   │   ├── prisma.module.ts      # Módulo do Prisma
│   │   └── prisma.service.ts     # Serviço do Prisma
├── test/                         # Arquivos de teste
│   ├── app.e2e-spec.ts           # Exemplo de teste end-to-end
│   └── jest-e2e.json             # Configuração do Jest para testes end-to-end
├── tsconfig.build.json           # Configurações de build do TypeScript
└── tsconfig.json                 # Configurações principais do TypeScript


```

---

## Como Rodar o projeto ✅

### 1. Localmente 🖥️

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/Le-Jr/crud-products-test.git
   cd backend
   ```

2. **Instalar as dependências**

   ```bash
     npm install
   ```

3. **Configurar o banco de dados (PostgreSQL):** Certifique-se de que o banco de dados PostgreSQL esteja configurado corretamente e acessível. As credenciais do banco de dados podem ser configuradas no arquivo .env.

4. **Rodar a aplicação**: Para rodar o backend no ambiente de desenvolvimento, use o seguinte comando:

   ```bash
   npm run start:dev
   ```

   Isso irá iniciar o servidor na porta 3000 por padrão.

5. **Acessar o Swagger**: A documentação da API gerada pelo Swagger estará disponível na rota /api após a aplicação ser inicializada. Você pode acessar a documentação visitando:

   ```bash
     http://localhost:3000/api
   ```

## Usando Docker 🐳

1. **Construir e rodar os containers**: Certifique-se de que o Docker esteja instalado em sua máquina e execute:
   ```bash
     docker compose up --build
   ```
2. **Acessar o backend**: O backend estará disponível na porta **3000**.

3. **Acessar o Swagger**: A documentação da API estará disponível em:

   ```bash
     http://localhost:3000/api
   ```

## Endpoints 🎖️

O backend fornece os seguintes endpoints:

### Produtos 📦

- **GET /products**: Listar todos os produtos.

- **GET /products/:id**: Buscar um produto específico pelo ID.

- **POST /products**: Criar um novo produto.

- **PATCH /products/:id**: Atualizar um produto existente.

- **DELETE /products/:id**: Deletar um produto.

### Categorias 🗂️

- **GET /categories**: Listar todas as categorias.

- **POST /categories**: Criar uma nova categoria.

### Swagger 📚

A documentação da API gerada pelo Swagger está disponível no endpoint /api. Para acessar a documentação interativa, basta inicializar a aplicação e navegar até:

```bash

http://localhost:3000/api

```

Essa interface permite testar os endpoints diretamente, visualizar os modelos de dados e obter uma visão geral de todos os recursos da API.
