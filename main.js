(function() {
  'use strict';

  // ============================================
  // ANALYTICS (GA4)
  //
  // Download de CV e cliques outbound NAO sao tratados aqui: o Enhanced
  // Measurement do GA4 ja emite file_download e click automaticamente, com
  // mais parametros (link_text, link_id, link_classes, link_domain).
  // Aqui ficam so os eventos que ele nao cobre.
  // ============================================
  function track(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
  }

  // ============================================
  // I18N
  // ============================================
  const i18n = {
    pt: {
      'meta.title': 'João Pedro Faria — Full Stack Developer',
      'meta.description': 'João Pedro Faria — Desenvolvedor Full Stack (.NET, Angular). Portfólio profissional.',
      'a11y.skip': 'Pular para o conteúdo',

      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.stack': 'Stack',
      'nav.contact': 'Contato',

      'hero.eyebrow': 'Full Stack Developer · Disponível',
      'hero.name': 'João Pedro<br>Faria.',
      'hero.sub': 'Construo aplicações web com .NET e Angular. Atualmente na Nexgs, focado em sistemas internos seguros e performáticos.',
      'hero.cv': 'Baixar CV',
      'hero.contact': 'Contato',

      'section.about': 'Sobre',
      'section.experience': 'Experiência',
      'section.stack': 'Stack',
      'section.contact': 'Contato',

      'about.body': 'Desenvolvedor Full Stack com experiência em aplicações web escaláveis usando .NET e Angular. Atuo na criação de sistemas de controle interno, integrações de APIs e otimização de performance. Estudante de Sistemas de Informação no Centro Universitário Una, em constante evolução técnica e profissional.',

      'timeline.now': 'Hoje',
      'timeline.remote': 'Remoto',

      'exp.nexgs-intro': 'Atuação full stack em três produtos críticos para clientes do setor financeiro:',
      'exp.nexgs.banco-tag': 'Compliance PLD/KYC e plataforma de agentes de IA',
      'exp.nexgs.banco.b1': 'Plataforma horizontal de compliance PLD/KYC com motor de regras desacoplado, separando regras regulatórias de políticas de risco do banco.',
      'exp.nexgs.banco.b2': 'Pipeline de eventos de decisão imutáveis para auditoria e re-treinamento de modelos, consumido em onboarding, transações e produtos de crédito.',
      'exp.nexgs.banco.b3': 'Integrações com serviços de KYC do mercado com normalização de dados; dashboards operacionais e ambiente de simulação histórica de impacto regulatório.',
      'exp.nexgs.banco.b4': 'Trilha de auditoria automática: consulta de histórico de decisão passou de esforço manual por caso para consulta estruturada em horas.',
      'exp.nexgs.suno-tag': 'Fundação técnica multi-produto',
      'exp.nexgs.suno.b1': '<strong>Suno Core</strong> — Consolidação das integrações fragmentadas entre CRM, billing, autenticação e entrega de conteúdo numa fundação única — lançamentos de produto passaram de ciclos de semanas para deploys de configuração.',
      'exp.nexgs.suno.b2': '<strong>Status Invest</strong> — Plataforma de dados em três camadas (ingestão → consolidação financeira → exposição), armazenamento time-series com retenção por granularidade e cache multi-camada com invalidação por evento.',
      'exp.nexgs.suno.b3': '<strong>Plataforma GPS (Assessoria)</strong> — Multi-tenancy por organização com isolamento lógico, separação execução/análise para SLAs independentes e integrações idempotentes com custódia/brokerage.',
      'exp.nexgs.hubcred.b1': 'Fintech de crédito construída do zero com arquitetura orientada a eventos como backbone de rastreabilidade e escalabilidade — processamento distribuído de decisões de crédito via streams imutáveis.',
      'exp.nexgs.hubcred.b2': 'Plataforma multi-tenant com isolamento por parceiro, sharding controlado e políticas de acesso baseadas em eventos, suportando múltiplos clientes simultâneos.',
      'exp.nexgs.hubcred.b3': 'Jornadas de crédito parametrizáveis por tenant sem necessidade de deploy; integrações idempotentes com bureaus, assinatura digital e cobrança, com reconciliação automática.',
      'exp.b2ml-role': 'Analista de TI',
      'exp.b2ml-note': 'Iniciei como Estagiário em Desenvolvimento Web em jul/2023 e fui efetivado como Analista de TI em mai/2024.',
      'exp.b2ml.b1': 'Microsserviços com Java 17 + Spring Boot para rastreabilidade de alimentos e controle de estoque.',
      'exp.b2ml.b2': 'Integração de dados de produtores no PRO Carbono Commodities (Bayer).',
      'exp.b2ml.b3': 'Modelagem e otimização de esquemas em PostgreSQL e MongoDB com JPA/Hibernate.',
      'exp.b2ml.b4': 'TDD/BDD com JUnit, Mockito e Hamcrest, com alta cobertura nas entregas críticas.',
      'edu.una-role': 'Bacharelado em Sistemas de Informação',

      'exp.nexgs-period': 'out/2024',
      'exp.nexgs.banco.b5': '<strong>Figaro</strong> — Plataforma corporativa de agentes de IA: APIs de runtime, catálogo e auditoria; proxy de LLM compatível com a API da OpenAI (AWS Bedrock e outros provedores); serviço de RAG; ferramentas expostas aos agentes por servidores MCP.',
      'exp.nexgs.banco.b6': '<strong>Figaro Desktop</strong> — Aplicativo Electron + React com SSO corporativo, atualização automática por canal e trilha de auditoria por tenant.',
      'exp.nexgs.banco.b7': 'Diagnóstico de falhas em produção pelos logs no Dynatrace: conversas longas estouravam a janela de contexto do modelo; entrega de um erro específico para o caso.',
      'exp.nexgs.suno.b4': '<strong>Status Invest · Ingestão</strong> — Ingestão de 16 fontes de dados (CVM, B3, SEC, Banco Central, IBGE, ANBIMA, Nasdaq, CoinMarketCap e fornecedores de market data), com workers por fila, PostgreSQL e base de leitura em MongoDB.',
      'exp.nexgs.suno.b5': '<strong>Status Invest · Séries temporais</strong> — Modelo reutilizável de séries temporais: 26 séries econômicas do Banco Central e do IBGE com histórico de revisões, além de séries diárias de preços, composições de índices e cotas de fundos.',
      'exp.nexgs.suno.b6': '<strong>Status Invest · Qualidade de dados</strong> — Colunas de preço trocadas no feed de um fornecedor (preço ajustado no lugar do fechamento), confirmadas em 2,7 milhões de linhas; análise de outliers em 7,27 milhões de negociações; conciliação exata de linhas na ingestão, validada em cargas de 20 mil a 659 mil registros.',
      'exp.nexgs.suno.b7': '<strong>Status Invest · Carteiras</strong> — Cálculos de carteira a partir das regras do cliente: dividend yield ponderado, yield on cost, compensação de day trade (FIFO) e IRRF, além do calendário de pregões da B3.',
      'exp.nexgs.hubcred.b4': 'Investigações de dados em produção com SQL, agrupando registros inconsistentes por causa raiz para separar o que se corrige nos dados do que depende de decisão de negócio.',
      'exp.b2ml-period': 'jul/2023 — out/2024',
      'edu.una-period': '2023 — 2026 (previsão)',
      'stack.data': 'Dados & IA',
      'stack.cloud': 'Cloud & DevOps',
      'stack.timeseries': 'Séries temporais',
      'stack.agents': 'Agentes de LLM · RAG · MCP',

      'contact.headline': 'Vamos conversar?',
      'footer.location': 'Pouso Alegre, MG · Brasil',
    },
    en: {
      'meta.title': 'João Pedro Faria — Full Stack Developer',
      'meta.description': 'João Pedro Faria — Full Stack Developer (.NET, Angular). Professional portfolio.',
      'a11y.skip': 'Skip to content',

      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.stack': 'Stack',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Full Stack Developer · Available',
      'hero.name': 'João Pedro<br>Faria.',
      'hero.sub': 'I build web applications with .NET and Angular. Currently at Nexgs, focused on secure and performant internal systems.',
      'hero.cv': 'Download CV',
      'hero.contact': 'Contact',

      'section.about': 'About',
      'section.experience': 'Experience',
      'section.stack': 'Stack',
      'section.contact': 'Contact',

      'about.body': 'Full Stack Developer with experience in scalable web applications using .NET and Angular. I work on internal control systems, API integrations and performance optimization. Information Systems undergraduate at Centro Universitário Una, in constant technical and professional growth.',

      'timeline.now': 'Now',
      'timeline.remote': 'Remote',

      'exp.nexgs-intro': 'Full stack work on three critical financial-sector products:',
      'exp.nexgs.banco-tag': 'AML/KYC compliance and AI agent platform',
      'exp.nexgs.banco.b1': 'Horizontal AML/KYC compliance platform with decoupled rules engine, separating regulatory rules from bank risk policies.',
      'exp.nexgs.banco.b2': 'Immutable decision-event pipeline for audit and model retraining, consumed across onboarding, transactions and credit product journeys.',
      'exp.nexgs.banco.b3': 'KYC market service integrations with data normalization; operational dashboards and historical regulatory-impact simulation environment.',
      'exp.nexgs.banco.b4': 'Automated audit trail: decision-history queries went from per-case manual effort to structured queries in hours.',
      'exp.nexgs.suno-tag': 'Multi-product technical foundation',
      'exp.nexgs.suno.b1': '<strong>Suno Core</strong> — Consolidation of fragmented integrations between CRM, billing, authentication and content delivery into a single foundation — product launches shifted from multi-week cycles to configuration-only deployments.',
      'exp.nexgs.suno.b2': '<strong>Status Invest</strong> — Three-layer data platform (ingestion → financial domain consolidation → public exposure), time-series storage with granularity-based retention and multi-layer caching with event-based invalidation.',
      'exp.nexgs.suno.b3': '<strong>Plataforma GPS (Assessoria)</strong> — Per-organization multi-tenancy with logical isolation, separated execution/analysis layers for independent SLAs, and idempotent custody/brokerage integrations.',
      'exp.nexgs.hubcred.b1': 'Credit fintech built from scratch with event-driven architecture as the backbone of traceability and scalability — distributed processing of credit decisions through immutable event streams.',
      'exp.nexgs.hubcred.b2': 'Multi-tenant platform with partner-level isolation, controlled sharding and event-based access policies, supporting multiple concurrent clients.',
      'exp.nexgs.hubcred.b3': 'Per-tenant configurable credit journeys without deployment; idempotent integrations with bureaus, digital signature and collection systems, with automated reconciliation.',
      'exp.b2ml-role': 'IT Analyst',
      'exp.b2ml-note': 'Started as Web Development Intern in Jul 2023, promoted to IT Analyst in May 2024.',
      'exp.b2ml.b1': 'Java 17 + Spring Boot microservices for food traceability and inventory control.',
      'exp.b2ml.b2': 'Producer data integration on PRO Carbono Commodities (Bayer).',
      'exp.b2ml.b3': 'PostgreSQL and MongoDB schema modeling and optimization with JPA/Hibernate.',
      'exp.b2ml.b4': 'TDD/BDD with JUnit, Mockito and Hamcrest, with high test coverage on critical deliveries.',
      'edu.una-role': 'Bachelor in Information Systems',

      'exp.nexgs-period': 'Oct 2024',
      'exp.nexgs.banco.b5': '<strong>Figaro</strong> — Enterprise AI agent platform: runtime, catalog and audit APIs; OpenAI-compatible LLM proxy (AWS Bedrock and other providers); RAG service; tools exposed to agents through MCP servers.',
      'exp.nexgs.banco.b6': '<strong>Figaro Desktop</strong> — Electron + React app with corporate SSO, channel-based auto-update and per-tenant audit trail.',
      'exp.nexgs.banco.b7': 'Diagnosed production failures from Dynatrace logs: long conversations exceeded the model context window; shipped a specific error for this case.',
      'exp.nexgs.suno.b4': '<strong>Status Invest · Ingestion</strong> — Ingestion of 16 data sources (CVM, B3, SEC, Brazilian Central Bank, IBGE, ANBIMA, Nasdaq, CoinMarketCap and market data vendors), with queue-based workers, PostgreSQL and a MongoDB read store.',
      'exp.nexgs.suno.b5': '<strong>Status Invest · Time series</strong> — Reusable time series model: 26 economic series from the Central Bank and IBGE with revision history, plus daily series for prices, index compositions and fund quotas.',
      'exp.nexgs.suno.b6': '<strong>Status Invest · Data quality</strong> — Found swapped price columns in a vendor feed (adjusted price in place of the close), confirmed across 2.7M rows; outlier analysis over 7.27M trades; exact row reconciliation for ingestion, validated on loads from 20k to 659k records.',
      'exp.nexgs.suno.b7': '<strong>Status Invest · Portfolios</strong> — Portfolio calculations from client rules: weighted dividend yield, yield on cost, day trade netting (FIFO) and withholding tax, plus the B3 trading calendar.',
      'exp.nexgs.hubcred.b4': 'Production data investigations in SQL, grouping inconsistent records by root cause to separate what can be fixed in the data from what needs a business decision.',
      'exp.b2ml-period': 'Jul 2023 — Oct 2024',
      'edu.una-period': '2023 — 2026 (expected)',
      'stack.data': 'Data & AI',
      'stack.cloud': 'Cloud & DevOps',
      'stack.timeseries': 'Time series',
      'stack.agents': 'LLM agents · RAG · MCP',

      'contact.headline': "Let's talk?",
      'footer.location': 'Pouso Alegre, MG · Brazil',
    },
  };

  const LANG_KEY = 'portfolio:lang';
  const DEFAULT_LANG = 'pt';

  function getLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }

  function applyLang(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value === undefined) return;

      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.innerHTML = value;
      }
    });

    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    document.title = dict['meta.title'];

    // Atualiza label do botão
    const label = document.querySelector('[data-lang-label]');
    if (label) label.textContent = lang === 'pt' ? 'EN' : 'PT';

    // Atualiza link do CV
    const cvLink = document.querySelector('[data-cv-link]');
    if (cvLink) cvLink.setAttribute('href', `assets/cv-joao-faria-${lang}.pdf`);

    localStorage.setItem(LANG_KEY, lang);
  }

  function initLang() {
    const lang = getLang();
    applyLang(lang);

    const toggle = document.querySelector('.lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = getLang();
        const next = current === 'pt' ? 'en' : 'pt';
        applyLang(next);
        track('language_change', { language: next });
      });
    }
  }

  // ============================================
  // THEME
  // ============================================
  const THEME_KEY = 'portfolio:theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const label = document.querySelector('[data-theme-label]');
    if (label) label.textContent = theme === 'dark' ? '☀' : '☾';
    localStorage.setItem(THEME_KEY, theme);
  }

  function initTheme() {
    // Inline script no <head> já aplicou. Aqui só atualizamos o label e conectamos o handler.
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const label = document.querySelector('[data-theme-label]');
    if (label) label.textContent = current === 'dark' ? '☀' : '☾';

    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        track('theme_change', { theme: next });
      });
    }
  }

  // ============================================
  // MOBILE NAV
  // ============================================
  function initMobileNav() {
    const burger = document.querySelector('.nav-burger');
    const drawer = document.getElementById('mobile-nav');
    if (!burger || !drawer) return;

    function close() {
      burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('hidden', '');
    }

    function open() {
      burger.setAttribute('aria-expanded', 'true');
      drawer.removeAttribute('hidden');
    }

    burger.addEventListener('click', () => {
      const isOpen = burger.getAttribute('aria-expanded') === 'true';
      if (isOpen) close(); else open();
    });

    // Fechar ao clicar em link
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', close);
    });

    // Fechar ao redimensionar pra desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) close();
    });

    // Fechar com Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        close();
        burger.focus();
      }
    });
  }

  // ============================================
  // REVEAL ON SCROLL
  // ============================================
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (items.length === 0) return;

    // Respeito a reduced-motion: mostra tudo imediatamente
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    // Fallback se não houver IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    items.forEach(el => observer.observe(el));
  }

  // ============================================
  // INIT
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initTheme();
    initMobileNav();
    initReveal();
  });

})();
