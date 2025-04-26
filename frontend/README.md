# Frontend - Hard Skill Test

## Descrição

Este é o frontend do projeto **Hard Skill Test**, desenvolvido com **React e TypeScript** além de **Shadcn UI e TailwindCss** para estilização. O frontend consome as APIs do backend para gerenciar produtos e categorias, permitindo aos usuários visualizar, criar, editar e excluir produtos.

A interface do usuário foi projetada para ser intuitiva e fácil de usar, com uma navegação clara para gerenciar os produtos e categorias do sistema.

---

## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=vite&theme=light)](https://skillicons.dev) - **Vite**: Ferramenta de build e desenvolvimento para React com suporte a Hot Module Replacement (HMR).

[![My Skills](https://skillicons.dev/icons?i=react&theme=light)](https://skillicons.dev) - **ReactJs**: Framework Node.js para a construção de APIs escaláveis e de fácil manutenção.Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.

[![My Skills](https://skillicons.dev/icons?i=typescript&theme=light)](https://skillicons.dev)- **TypeScript**: Superset do JavaScript que traz tipagem estática e maior segurança no desenvolvimento

<img width="55" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png" alt="ShadCn UI" title="ShadCn UI"/> - **Shadcn UI**: ShadCN é uma biblioteca de componentes de UI para React, otimizada com Tailwind CSS, que oferece componentes prontos e personalizáveis para criar interfaces modernas e acessíveis.

[![My Skills](https://skillicons.dev/icons?i=tailwind&theme=light)](https://skillicons.dev)- **TailwindCss**: Framework de CSS utilitário para estilização rápida e responsiva

[![My Skills](https://skillicons.dev/icons?i=docker&theme=light)](https://skillicons.dev)- **Docker**: Utilizado para containerizar o frontend e facilitar o desenvolvimento.

---

## Estrutura do Projeto

```bash
frontend/
├── assets/                        # Arquivos estáticos, como imagens e fontes
├── components/                    # Componentes principais e reutilizáveis
│   ├── FormButton/                # Componente de botão de formulário
│   ├── Product/                   # Componente principal para o produto
│   ├── ProductCard/               # Componente para exibição do produto
│   ├── ProductCategoryFields/     # Campos específicos para a categoria de produto
│   ├── ProductFormFields/         # Campos específicos do formulário de produto
│   ├── ProductId/                 # Componente para exibição e manipulação do ID do produto
│   └── Types/                     # Tipos TypeScript usados nos componentes
├── components.json                # Arquivo de configuração ou metadados dos componentes
├── Dockerfile                     # Arquivo de configuração do Docker para o frontend
├── index.html                     # Arquivo HTML principal da aplicação
├── lib/                           # Bibliotecas e utilitários auxiliares
├── main.tsx                       # Componente principal da aplicação
├── node_modules/                  # Dependências do projeto
├── package.json                   # Dependências do projeto
├── package-lock.json              # Controle de versão das dependências
├── README.md                      # Este arquivo
├── src/                           # Código-fonte da aplicação
│   ├── components/                # Componentes específicos da aplicação
│   ├── index.css                  # Estilos globais da aplicação
│   ├── lib/                       # Funções e utilitários auxiliares
│   ├── main.tsx                   # Componente de entrada da aplicação
│   └── vite-env.d.ts              # Definições de tipo do Vite
├── tsconfig.app.json              # Configuração do TypeScript para a aplicação
├── tsconfig.json                  # Configuração principal do TypeScript
├── tsconfig.node.json             # Configuração do TypeScript para Node.js
├── vite.config.ts                 # Configuração do Vite para build e desenvolvimento


```

---

## Como Rodar o projeto ✅

### 1. Localmente 🖥️

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/Le-Jr/crud-products-test.git
   cd frontend
   ```

2. **Instalar as dependências**

   ```bash
     npm install
   ```

3. **Rodar a aplicação**: Para rodar o backend no ambiente de desenvolvimento, use o seguinte comando:

   ```bash
   npm run dev
   ```

   Isso irá iniciar o servidor na porta 5173 por padrão.

4. **Acessar a aplicação**: O frontend estará disponível na URL:

   ```bash
     http://localhost:5173
   ```

## Usando Docker 🐳

1. **Construir e rodar os containers**: Certifique-se de que o Docker esteja instalado em sua máquina e execute:
   ```bash
     docker compose up --build
   ```
2. **Acessar o frontend**: O frontend estará disponível na porta **5173**.

   ```bash
     http://localhost:5173
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

---

### Considerações finais

Este projeto foi desenvolvido para fornecer uma aplicação simples e eficiente para gerenciar produtos e categorias. A estrutura do frontend utiliza as melhores práticas do **React, TypeScript, Shadcn e Tailwind CSS** para proporcionar uma experiência de usuário fluida e responsiva. Além disso, a integração com a API backend via **endpoints REST** permite um gerenciamento completo das informações.

Para mais informações sobre a API, consulte a documentação do backend disponível em Swagger.
