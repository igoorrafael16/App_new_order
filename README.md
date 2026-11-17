# 🍳 Dark Kitchen — Sistema de Gestão

Painel de gestão para cozinhas sob demanda (Dark Kitchens).  
Centralize pedidos de delivery, acompanhe a produção em tempo real e controle o estoque de insumos — tudo em uma interface simples e intuitiva.

---

## 📋 Páginas do Sistema

| Página | O que faz |
|--------|-----------|
| **Visão Geral** | Dashboard com total de pedidos, faturamento do dia e tabela dos pedidos recentes |
| **Pedidos** | Lista completa com busca, filtros por status/canal e atualização de status |
| **Produção** | Painel Kanban com cartões organizados por etapa e botão para avançar pedidos |
| **Insumos** | Controle de estoque com cadastro, edição, exclusão e alerta de estoque baixo |
| **Configurações** | Dados da cozinha: nome, endereço, telefone e horário de funcionamento |

> 📖 **Quer testar o projeto?** Veja o [Guia de Execução](GUIA_DE_EXECUCAO.md). Você pode testar **sem precisar do Node.js**, apenas abrindo o `index.html` no seu navegador!

---

## 🛠 Tecnologias

- **React 19** — interface de componentes
- **Vite** — bundler e servidor de desenvolvimento
- **React Router** — navegação entre páginas
- **Lucide React** — ícones
- **localStorage** — persistência dos dados no navegador

---

## 📁 Estrutura de Pastas

```
src/
├── components/       → Sidebar e Header (layout compartilhado)
├── data/             → Dados iniciais e hook de persistência
├── pages/            → As 5 páginas do sistema
│   ├── Dashboard     → Visão Geral
│   ├── Orders        → Pedidos
│   ├── Production    → Produção
│   ├── Supplies      → Insumos
│   └── SettingsPage  → Configurações
├── App.jsx           → Rotas e layout principal
└── main.jsx          → Ponto de entrada
```

---

## 💡 Observações

- Os dados são salvos no **localStorage** do navegador. Se quiser resetar, limpe o armazenamento local ou abra em aba anônima.
- Alterações de status nos **Pedidos** e na **Produção** ficam sincronizadas automaticamente em todas as páginas.
- O sistema já vem com **8 pedidos** e **12 insumos** fictícios para demonstração.
