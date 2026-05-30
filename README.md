🏦 IT-Bank - Sistema Bancário Digital
📋 Sobre o Projeto
O IT-Bank é um protótipo de sistema bancário digital desenvolvido com foco em tecnologias modernas de Frontend utilizando React, Next.js, TypeScript e Tailwind CSS.
O objetivo do projeto é simular as principais operações de uma instituição financeira digital, permitindo que clientes realizem cadastro, autenticação, gerenciamento de contas e operações bancárias básicas.

🚀 Tecnologias Utilizadas
Frontend
    • React
    • Next.js
    • TypeScript
    • Tailwind CSS
    • Context API
    • React Hook Form
    • Zod
    • Axios
Arquitetura
    • Componentização
    • Layouts Globais
    • Layouts Locais
    • Rotas Protegidas
    • Server Components (Next.js)
    • Client Components

📁 Estrutura de Layouts
Layout Global
Responsável por elementos compartilhados em toda aplicação:
    • Header
    • Footer
    • Sidebar
    • Navegação Principal
    • Temas
    • Providers
    • Contextos Globais
Exemplo:
app/
├── layout.tsx
├── page.tsx
├── login/
├── dashboard/
├── conta/
└── extrato/

Layout Local
Cada módulo possui seu próprio layout responsável por definir comportamentos específicos da rota.
Exemplo:
app/
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    ├── conta/
    ├── extrato/
    └── transferencias/
Diretrizes
Cada módulo poderá possuir:
    • Breadcrumb
    • Menu interno
    • Controle de permissões
    • Contextos locais
    • Componentes específicos

🔐 Módulo de Autenticação
Login
Campos
Campo	Tipo
E-mail	Email
Senha	Password
Tela
E-mail
Senha

[ Entrar ]

Não possui conta?
[ Cadastre-se ]

👤 Cadastro de Usuário
Primeiro Acesso
Campos
Campo	Tipo
E-mail	Email
Senha	Password
Confirmar Senha	Password
Tela
Cadastre-se e acesse sua conta

E-mail
Senha
Confirmar Senha

[ Criar Conta ]

🏦 Abertura de Conta Bancária
Após o cadastro o cliente poderá abrir:
Conta Corrente
    • Permite depósitos
    • Permite saques
    • Permite transferências
    • Possui limite especial
Conta Poupança
    • Permite depósitos
    • Permite saques
    • Permite transferências

📚 Histórias de Usuário
Cadastro
Como cliente do banco
Eu gostaria de criar minha própria conta utilizando meu endereço de e-mail e definir minha senha de acesso.
Critérios de Aceitação
    • Cadastro utilizando e-mail válido
    • Senha obrigatória
    • Confirmação de senha obrigatória
    • E-mail único no sistema

Login
Como cliente do banco
Eu gostaria de acessar minha conta utilizando minhas credenciais de segurança.
Critérios de Aceitação
    • Login por e-mail
    • Login por senha
    • Sessão autenticada
    • Proteção de rotas

Abertura de Conta
Como cliente do banco
Eu gostaria de abrir uma Conta Corrente ou Conta Poupança.
Critérios de Aceitação
    • Escolha do tipo de conta
    • Conta criada automaticamente
    • Número de conta gerado

Depósito
Como cliente do banco
Eu gostaria de realizar depósitos em minha conta.
Formas de Depósito
    • Dinheiro em espécie
    • PIX
    • Transferência bancária
Critérios de Aceitação
    • Atualização automática do saldo
    • Registro da movimentação
    • Histórico disponível no extrato

Saque
Como cliente do banco
Eu gostaria de efetuar saques da minha conta.
Critérios de Aceitação
    • Verificação de saldo
    • Atualização do saldo
    • Registro da operação

Transferência
Como cliente do banco
Eu gostaria de transferir valores para outras contas.
Critérios de Aceitação
    • Validação da conta destino
    • Verificação de saldo
    • Registro da transação

💳 Limite da Conta Corrente
Regra de Negócio
Cada Conta Corrente possuirá:
Limite Especial: R$ 2.000,00
Juros: 55% ao mês
Critérios
    • Disponível apenas para Conta Corrente
    • Utilização automática após saldo zerado
    • Cobrança de juros sobre valor utilizado

📄 Extrato Bancário
Como cliente do banco
Eu gostaria de visualizar meu extrato bancário por período.
Filtros Disponíveis
    • Últimos 15 dias
    • Últimos 30 dias
    • Últimos 60 dias

Movimentações Exibidas
Entradas
    • Depósitos
    • PIX Recebidos
    • Transferências Recebidas
Saídas
    • Saques
    • PIX Enviados
    • Transferências Realizadas
    • Utilização de Limite

Informações do Extrato
Cada transação deverá exibir:
Data
Hora
Tipo
Descrição
Valor
Saldo Atual

🎯 Funcionalidades MVP
    • Cadastro de usuário
    • Login
    • Abertura de conta corrente
    • Abertura de conta poupança
    • Consulta de saldo
    • Depósito
    • Saque
    • Transferência
    • Extrato bancário
    • Controle de limite especial

📈 Roadmap Futuro
    • Recuperação de senha
    • Autenticação em dois fatores (2FA)
    • Cartão virtual
    • Investimentos
    • Empréstimos
    • PIX agendado
    • Dashboard financeiro
    • Relatórios gerenciais
    • Notificações em tempo real

👨‍💻 Equipe
Projeto acadêmico desenvolvido para prática de:
    • React
    • Next.js
    • TypeScript
    • Tailwind CSS
    • Arquitetura Frontend
    • Design de Sistemas Bancários

📜 Licença
Projeto desenvolvido para fins educacionais e de aprendizado.
-----------------------------------------------
Programador : Eduardo M. Dias 










This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
