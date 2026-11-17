# 🚀 Guia de Execução

Como rodar e testar o projeto **Dark Kitchen** em qualquer ambiente.

---

## ⚡ Opção 1: Sem Node.js (Direto pelo Navegador — Recomendado para testes rápidos)

Você **não precisa instalar nada** para testar o site!

1. Vá até a pasta do projeto (`App_new_order`).
2. Dê dois cliques no arquivo **`index.html`** (ou clique com botão direito → *Abrir com* → Google Chrome, Microsoft Edge ou Firefox).
3. O sistema será carregado imediatamente no navegador.

### Como funciona o teste sem Node:
- **Zero dependências:** funciona 100% offline e sem necessidade de servidor local.
- **Persistência total:** todos os dados de pedidos, avanços de produção, novos insumos cadastrados e configurações são salvos automaticamente no **`localStorage`** do navegador.
- **Restauração rápida:** se quiser reiniciar os testes do zero com os dados fictícios originais, vá até a página **Configurações** e clique em **"Restaurar Dados Iniciais de Teste"**.

---

## 💻 Opção 2: Com Node.js (Ambiente de Desenvolvimento)

Se desejar executar o projeto via servidor local com Node.js:

### Pré-requisitos
- **Node.js** (versão 18 ou superior) — [download oficial](https://nodejs.org/)

### Passo a passo

**1. Abra o terminal na pasta do projeto**
```bash
cd App_new_order
```

**2. Instale as dependências**
```bash
npm install
```

**3. Inicie o servidor local**
```bash
npm run dev
```

**4. Acesse no navegador**
Abra o link exibido no terminal (geralmente `http://localhost:5173`).

---

## 📦 Gerar pacote de produção

Caso queira gerar a build otimizada:
```bash
npm run build
npm run preview
```
