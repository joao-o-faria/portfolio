# Portfólio — João Pedro Faria

> Cartão de visita digital de um Desenvolvedor Full Stack (.NET + Angular).

**[Acesse o site →](https://joao-o-faria.github.io/portfolio/)**

Single-page, bilíngue (PT/EN), tema claro/escuro, totalmente responsivo. Sem build, sem dependências externas.

---

## Sobre

Desenvolvedor Full Stack com experiência em sistemas críticos para o setor financeiro. Atuação atual na **Nexgs**, em projetos como Banco Original (jornada de compliance PLD/KYC), Grupo Suno (plataforma multi-produto) e HubCred (fintech de crédito event-driven). Experiência prévia na **B2ML Sistemas** com microsserviços Java/Spring no projeto SafeTrace · Bayer PRO Carbono Commodities.

- **Localização:** Pouso Alegre, MG · Brasil
- **Formação:** Bacharelado em Sistemas de Informação — Centro Universitário Una
- **E-mail:** [joaopedropepe56@gmail.com](mailto:joaopedropepe56@gmail.com)
- **LinkedIn:** [linkedin.com/in/joao-pedro-faria-dev](https://www.linkedin.com/in/joao-pedro-faria-dev/)

---

## Por dentro do site

| | |
|---|---|
| **Stack** | HTML5 · CSS3 · JavaScript vanilla |
| **Build** | Nenhum — arquivos estáticos servidos direto |
| **Idiomas** | PT (padrão) + EN, com toggle persistente em `localStorage` |
| **Tema** | claro/escuro, com persistência e respeito a `prefers-color-scheme` |
| **Responsivo** | mobile-first, breakpoints 480 / 640 / 960px |
| **Acessibilidade** | WCAG AA, skip-link, `prefers-reduced-motion`, fallback `<noscript>` |
| **Fonte** | Inter Variable self-hosted (zero requests externos) |
| **Hospedagem** | GitHub Pages |

---

## Rodar local

Qualquer servidor estático serve:

```bash
python -m http.server 8000
# ou
npx serve .
```

Acesse `http://localhost:8000`.

---

## Estrutura

```
portfolio/
├── index.html      # Estrutura semântica + hooks data-i18n
├── styles.css      # Tokens, layout, componentes, media queries
├── main.js         # i18n, theme toggle, mobile nav, reveal-on-scroll
└── assets/
    ├── fonts/Inter-Variable.woff2
    ├── cv-joao-faria-pt.pdf
    ├── cv-joao-faria-en.pdf
    ├── favicon.svg
    └── favicon.png
```
