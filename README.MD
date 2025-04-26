# Hard Skill Test

## Descrição

Este projeto é uma aplicação **CRUD (Create, Read, Update, Delete)** de produtos e categorias. Ele foi desenvolvido utilizando **React, TypeScript, Shadcn UI, TailwindCSS** para o frontend, e o backend foi construído com a API REST, utilizando **NestJs, prisma e PostgreSQL** para gerenciar os produtos e categorias de forma eficiente.

---

### A aplicação permite que os usuários visualizem, criem, editem e excluam produtos.

---

## Tecnologias Utilizadas

### Frontend 🖼️

[![My Skills](https://skillicons.dev/icons?i=vite&theme=light)](https://skillicons.dev) - **Vite**: Ferramenta de build e desenvolvimento para React com suporte a Hot Module Replacement (HMR).

[![My Skills](https://skillicons.dev/icons?i=react&theme=light)](https://skillicons.dev) - **ReactJs**: Framework Node.js para a construção de APIs escaláveis e de fácil manutenção.Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.

[![My Skills](https://skillicons.dev/icons?i=typescript&theme=light)](https://skillicons.dev)- **TypeScript**: Superset do JavaScript que traz tipagem estática e maior segurança no desenvolvimento

<img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png" alt="ShadCn UI" title="ShadCn UI"/> - **Shadcn UI**: ShadCN é uma biblioteca de componentes de UI para React, otimizada com Tailwind CSS, que oferece componentes prontos e personalizáveis para criar interfaces modernas e acessíveis.

[![My Skills](https://skillicons.dev/icons?i=tailwind&theme=light)](https://skillicons.dev)- **TailwindCss**: Framework de CSS utilitário para estilização rápida e responsiva

[![My Skills](https://skillicons.dev/icons?i=docker&theme=light)](https://skillicons.dev)- **Docker**: Utilizado para containerizar o frontend e facilitar o desenvolvimento.

---

### Backend 🖥️

[![My Skills](https://skillicons.dev/icons?i=nest&theme=light)](https://skillicons.dev) - **NestJS**: Framework Node.js para a construção de APIs escaláveis e de fácil manutenção.

[![My Skills](https://skillicons.dev/icons?i=postgresql&theme=light)](https://skillicons.dev)- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as informações de produtos e categorias.

[![My Skills](https://skillicons.dev/icons?i=prisma&theme=light)](https://skillicons.dev)- **Prisma**: ORM para interagir com o banco de dados.

[![My Skills](https://skillicons.dev/icons?i=docker&theme=light)](https://skillicons.dev)- **Docker**: Utilizado para containerizar o backend e facilitar o desenvolvimento.

---

## Estrutura do Projeto

```bash
crud-project-test/
├── frontend/                     # Frontend da aplicação
├── backend/                      # Backend da aplicação
├── README.md                     # Este arquivo
└── docker-compose.yml            # Arquivo de configuração para rodar os containers Docker

```

---

## Como Rodar o projeto ✅

## Usando Docker 🐳

1. **Construir e rodar os containers**: Certifique-se de que o Docker esteja instalado em sua máquina e execute:

   ```bash
   docker compose up --build
   ```

2. **Para acessar o Frontend** Ele estará disponível na porta 5173

   ```bash
   http://localhost:5173
   ```

3. **Configurar o banco de dados (PostgreSQL):** Certifique-se de que o banco de dados PostgreSQL esteja configurado corretamente e acessível. As credenciais do banco de dados podem ser configuradas no arquivo .env(exemplo abaixo)

   ```bash
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydb"
   ```

4. **Acessar o Swagger para testar a API**: A documentação da API gerada pelo Swagger estará disponível na rota /api após a aplicação ser inicializada. Você pode acessar a documentação visitando:

   ```bash
     http://localhost:3000/api
   ```

---

### Funcionalidades 🎯

O frontend interage com a API do backend, proporcionando as seguintes funcionalidades:

#### Produtos 📦

- **Visualizar Produtos**: Exibe todos os produtos cadastrados na aplicação.

- **Criar Produto**: Permite criar novos produtos através de um formulário.

- **Editar Produto**: Permite editar os dados de um produto existente.

- **Deletar Produto**: Permite excluir um produto.

---

## Endpoints da API🎖️

O frontend interage com a API do backend, proporcionando as seguintes funcionalidades:

### Produtos 📦

- **GET /products**: Listar todos os produtos.

- **GET /products/:id**: Buscar um produto específico pelo ID.

- **POST /products**: Criar um novo produto.

- **PATCH /products/:id**: Atualizar um produto existente.

- **DELETE /products/:id**: Deletar um produto.

### Categorias 🗂️

- **GET /category**: Listar todas as categorias.

- **POST /category**: Criar uma nova categoria.

---

### Swagger 📚

A documentação da API gerada pelo Swagger está disponível no endpoint /api. Para acessar a documentação interativa, basta inicializar a aplicação e navegar até:

```bash

http://localhost:3000/api

```

Essa interface permite testar os endpoints diretamente, visualizar os modelos de dados e obter uma visão geral de todos os recursos da API.

### Considerações finais

Este projeto foi desenvolvido para fornecer uma solução simples e eficiente para gerenciar produtos e suas categorias. Utilizando React, TypeScript, Shadcn UI, e TailwindCSS no frontend, com um backend que oferece a capacidade de gerenciar dados via API REST. A integração entre frontend e backend permite uma experiência fluida e interativa para o gerenciamento de produtos e categorias.

Este é um projeto ideal para ser expandido com funcionalidades adicionais, como autenticação de usuários, filtros avançados, entre outras melhorias.
