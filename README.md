# Portfólio — João Pedro Faria

Portfólio profissional pessoal. Single-page, bilíngue (PT/EN), tema claro/escuro.

**Live:** https://jl2218.github.io/portfolio/ (após habilitar GitHub Pages)

**Stack:** HTML + CSS + JavaScript vanilla. Sem build, sem dependências.

## Rodar local

```powershell
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node (npx, sem instalar nada)
npx serve .
```

Acesse `http://localhost:8000`.

## Estrutura

```
portfolio/
├── index.html          # estrutura semântica + data-i18n hooks
├── styles.css          # tokens, layout, componentes, media queries
├── main.js             # i18n + theme toggle + mobile nav + reveal
└── assets/
    ├── fonts/Inter-Variable.woff2
    ├── cv-joao-faria-pt.pdf
    ├── cv-joao-faria-en.pdf
    ├── favicon.svg
    └── favicon.png
```

## Atualizar conteúdo

- **Textos:** editar o objeto `i18n` no topo de `main.js` (chaves PT e EN espelhadas)
- **CV:** atualizar `assets/cv-joao-faria-pt.pdf` e `assets/cv-joao-faria-en.pdf` (gerados via Ctrl+P nos arquivos `cv-pt.html` / `cv-en.html`)
- **Cores/fontes:** variáveis CSS no topo de `styles.css` (seção `TOKENS`)
- **Experiência/educação:** editar as `<article class="timeline-item">` em `index.html` e adicionar chaves no `i18n`

## Deploy no GitHub Pages

### Primeiro deploy

1. Repositório já criado: `jl2218/portfolio`
2. Push do branch `main`:
   ```powershell
   git push -u origin main
   ```
3. No repo no GitHub: **Settings → Pages → Source:** branch `main`, folder `/ (root)` → **Save**
4. Aguardar ~1 min, acessar `https://jl2218.github.io/portfolio/`

### Updates futuros

```powershell
git add .
git commit -m "feat: update <o que mudou>"
git push
```

GitHub Pages republica em ~30s.

## Performance & A11y

- Lighthouse alvo: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥90
- Sem dependências externas (CDN, Google Fonts) — tudo self-hosted
- Respeita `prefers-color-scheme` e `prefers-reduced-motion`
- WCAG AA mínimo (contraste preto/branco cumpre AAA)
- Fallback `<noscript>` mantém conteúdo visível mesmo sem JS

## Customizações comuns

**Trocar fonte:**
1. Substituir arquivo em `assets/fonts/`
2. Atualizar `@font-face` em `styles.css`
3. Atualizar `--font-sans` no `:root`

**Trocar cores:**
Editar variáveis em `:root` (tema claro) e `[data-theme="dark"]` (tema escuro) no topo de `styles.css`.

**Adicionar nova seção:**
1. Adicionar `<section>` em `index.html` seguindo o padrão das existentes (com `data-i18n` nos textos e classe `.reveal` para animação)
2. Adicionar chaves no objeto `i18n` em `main.js`
3. Adicionar link na nav (desktop + mobile)
