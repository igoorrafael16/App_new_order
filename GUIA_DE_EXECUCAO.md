# 🚀 Guia de Execução

Como rodar o projeto **Dark Kitchen** em um novo ambiente.

---

## Pré-requisitos

Você precisa ter instalado na sua máquina:

- **Node.js** (versão 18 ou superior) — [baixar aqui](https://nodejs.org/)

> Para verificar se já tem, abra o terminal e digite:
> ```
> node --version
> ```

---

## Passo a passo

**1. Clone o projeto** (ou copie a pasta para o seu computador)

```bash
git clone <url-do-repositorio>
cd App_new_order
```

**2. Instale as dependências**

```bash
npm install
```

**3. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

**4. Abra no navegador**

Acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

Pronto! O sistema já abre com dados de exemplo prontos para uso.

---

## Gerar versão para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`. Para pré-visualizar:

```bash
npm run preview
```
