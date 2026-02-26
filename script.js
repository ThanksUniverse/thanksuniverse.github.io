const i18n = {
  en: {
    lang: 'en',
    toggle: 'PT',
    title: 'Pedro Bertoluchi | Mid-Level .NET Engineer',
    description: 'Pedro Bertoluchi - Mid-Level C#/.NET Software Engineer building reliable systems, secure integrations, and API governance layers.'
  },
  pt: {
    lang: 'pt-BR',
    toggle: 'EN',
    title: 'Pedro Bertoluchi | Engenheiro Pleno .NET',
    description: 'Pedro Bertoluchi - Engenheiro de Software Pleno C#/.NET construindo sistemas confiáveis, integrações seguras e camadas de governança de APIs.'
  }
};

const selectorText = {
  '.top-nav nav a[href="#about"]': { en: 'About', pt: 'Sobre' },
  '.top-nav nav a[href="#projects"]': { en: 'Projects', pt: 'Projetos' },
  '.top-nav nav a[href="#strengths"]': { en: 'Strengths', pt: 'Diferenciais' },
  '.top-nav nav a[href="#stack"]': { en: 'Stack', pt: 'Stack' },
  '.top-nav nav a[href="#contact"]': { en: 'Contact', pt: 'Contato' },
  '.nav-cta': { en: "Let's Talk", pt: 'Vamos Conversar' },
  
  '.hero .kicker': { en: 'Mid-Level .NET Software Engineer \u2014 APIs, Integrations & Greenfield Delivery', pt: 'Engenheiro de Software Pleno .NET \u2014 APIs, Integra\u00e7\u00f5es e Entrega Greenfield' },
  '.hero-sub': { en: 'I work across the technical lifecycle: from designing robust backends and API control layers (APIM) to shipping high-performance systems. I focus on reliability, zero-trust security, and measurable business impact.', pt: 'Atuo em todo o ciclo t\u00e9cnico: do design de backends robustos e camadas de controle de API (APIM) at\u00e9 a entrega de sistemas de alta performance. Meu foco \u00e9 confiabilidade, seguran\u00e7a zero-trust e impacto mensur\u00e1vel no neg\u00f3cio.' },
  '.hero-actions a.btn.solid:not(.alt)': { en: 'View Case Studies', pt: 'Ver Estudos de Caso' },
  '.hero-actions a.btn.solid.alt': { en: "Let's Connect", pt: 'Vamos Conversar' },
  
  '.trust-strip li:nth-of-type(3)': { en: 'Distributed Architecture', pt: 'Arquitetura Distribu\u00edda' },
  '.trust-strip li:nth-of-type(4)': { en: 'Zero-Trust Security', pt: 'Seguran\u00e7a Zero-Trust' },
  '.trust-strip li:nth-of-type(5)': { en: 'Performance Optimization', pt: 'Otimiza\u00e7\u00e3o de Performance' },

  '.hero-card h2': { en: 'Technical Capabilities', pt: 'Capacidades T\u00e9cnicas' },
  '.hero-card > p': { en: 'End-to-end execution: from whiteboard architecture to production observability.', pt: 'Atua\u00e7\u00e3o de ponta a ponta: da arquitetura no quadro branco \u00e0 observabilidade em produ\u00e7\u00e3o.' },
  
  '.stat-grid article:nth-of-type(1) h3': { en: 'Accelerated', pt: 'Ciclos \u00c1geis' },
  '.stat-grid article:nth-of-type(1) p': { en: 'Lean MVP cycles', pt: 'Entregas Lean/MVP' },
  '.stat-grid article:nth-of-type(2) h3': { en: 'Governance', pt: 'Governan\u00e7a' },
  '.stat-grid article:nth-of-type(2) p': { en: 'APIM & Rate limiting', pt: 'APIM e rate limiting' },
  '.stat-grid article:nth-of-type(3) h3': { en: 'Performance', pt: 'Performance' },
  '.stat-grid article:nth-of-type(3) p': { en: 'Redis & SignalR', pt: 'Redis e SignalR' },
  '.stat-grid article:nth-of-type(4) h3': { en: 'Zero-Trust', pt: 'Zero-Trust' },
  '.stat-grid article:nth-of-type(4) p': { en: 'OWASP & JWT', pt: 'OWASP e JWT' },

  '#about .kicker': { en: 'About', pt: 'Sobre' },
  '#about h2': { en: 'Pedro Bertoluchi', pt: 'Pedro Bertoluchi' },
  '.about-headline': { en: 'Building secure .NET systems and enforcing robust API governance.', pt: 'Construindo sistemas .NET seguros e implementando governan\u00e7a robusta de APIs.' },
  '.about-body': { en: "I'm Pedro, a software engineer with deep expertise in the .NET and Azure ecosystems. I specialize in designing distributed architectures, enforcing API governance (Azure API Management), and delivering secure full-stack platforms. My pragmatism drives my code: I prioritize observability, frictionless integrations, and building systems that remain resilient under heavy operational stress.", pt: 'Sou Pedro, engenheiro de software focado no ecossistema .NET e Azure. Especializo-me em desenhar arquiteturas distribu\u00eddas, implementar governan\u00e7a de APIs (Azure API Management) e entregar plataformas full-stack seguras. Meu pragmatismo dita meu c\u00f3digo: foco em observabilidade, integra\u00e7\u00f5es sem atrito e sistemas que operam com resili\u00eancia sob estresse operacional.' },
  
  '.highlight-card h3': { en: 'What I deliver', pt: 'O que eu entrego' },
  '.highlight-card li:nth-of-type(1)': { en: 'Strong technical execution for greenfield initiatives: from whiteboard architecture to production rollout.', pt: 'Execu\u00e7\u00e3o t\u00e9cnica forte em iniciativas greenfield: da defini\u00e7\u00e3o arquitetural ao rollout em produ\u00e7\u00e3o.' },
  '.highlight-card li:nth-of-type(2)': { en: 'Azure APIM Gateway implementation: enforcing centralized traffic control, abuse protection, and standardized telemetry.', pt: 'Implementa\u00e7\u00e3o de Gateways APIM: centraliza\u00e7\u00e3o de tr\u00e1fego, prote\u00e7\u00e3o contra abusos e telemetria padronizada.' },
  '.highlight-card li:nth-of-type(3)': { en: 'Enterprise integration optimization: reducing architectural friction and boosting reliability via messaging and Redis.', pt: 'Otimiza\u00e7\u00e3o de integra\u00e7\u00f5es corporativas: reduzindo atrito e aumentando a confiabilidade com mensageria e Redis.' },
  '.highlight-card li:nth-of-type(4)': { en: 'AI/RAG automation flows that reduced operational document retrieval time and improved decision-making.', pt: 'Automa\u00e7\u00e3o via IA/RAG que reduziu o tempo de busca por documenta\u00e7\u00f5es e melhorou a tomada de decis\u00e3o.' },
  '.highlight-card li:nth-of-type(5)': { en: "Engineering standardization through reusable API/SignalR templates, significantly accelerating the team's time-to-market.", pt: 'Padroniza\u00e7\u00e3o de engenharia atrav\u00e9s de templates reutiliz\u00e1veis, acelerando o time-to-market da equipe.' },
  
  '.competence-tags span:nth-of-type(1)': { en: 'Backend Architecture', pt: 'Arquitetura Backend' },
  '.competence-tags span:nth-of-type(2)': { en: 'Azure APIM Governance', pt: 'Governan\u00e7a Azure APIM' },
  '.competence-tags span:nth-of-type(3)': { en: 'Distributed Systems', pt: 'Sistemas Distribu\u00eddos' },
  '.competence-tags span:nth-of-type(4)': { en: 'Zero-Trust Security', pt: 'Seguran\u00e7a Zero-Trust' },
  '.competence-tags span:nth-of-type(5)': { en: 'High-Performance APIs', pt: 'APIs de Alta Performance' },
  '.competence-tags span:nth-of-type(6)': { en: 'Real-time Workflows', pt: 'Workflows em Tempo Real' },
  '.competence-tags span:nth-of-type(7)': { en: 'System Observability', pt: 'Observabilidade de Sistemas' },
  '.competence-tags span:nth-of-type(8)': { en: 'Greenfield Execution', pt: 'Execu\u00e7\u00e3o Greenfield' },

  '#projects .kicker': { en: 'Selected Work', pt: 'Trabalhos Selecionados' },
  '#projects .section-head h2': { en: 'Engineering solutions with measurable business impact', pt: 'Solu\u00e7\u00f5es de engenharia com impacto de neg\u00f3cio mensur\u00e1vel' },
  
  '.project-grid article:nth-of-type(1) .badge': { en: 'Greenfield Platform', pt: 'Plataforma Greenfield' },
  '.project-grid article:nth-of-type(1) h3': { en: 'MG Comex Workflow Platform', pt: 'Plataforma de Fluxo MG Comex' },
  '.project-grid article:nth-of-type(1) .project-desc': { en: 'End-to-end import pipeline with role-based modules, accelerating operational digitization.', pt: 'Pipeline completo de importa\u00e7\u00e3o com m\u00f3dulos por perfil, acelerando a digitaliza\u00e7\u00e3o operacional.' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(1)': { en: 'Designed architecture and API contracts', pt: 'Desenhei arquitetura e contratos de API' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(2)': { en: 'Built Blazor UI and EF Core data workflows', pt: 'Implementei UI em Blazor e fluxos de dados com EF Core' },
  '.project-grid article:nth-of-type(1) li:nth-of-type(3)': { en: 'Delivered functional MVPs in 4-week cycles', pt: 'Entreguei MVPs funcionais em ciclos de 4 semanas' },
  
  '.project-grid article:nth-of-type(2) .badge': { en: 'Cloud Gateway', pt: 'Gateway em Nuvem' },
  '.project-grid article:nth-of-type(2) h3': { en: 'Azure API Management Control Layer', pt: 'Camada de Controle com Azure API Management' },
  '.project-grid article:nth-of-type(2) .project-desc': { en: 'Centralized API gateway acting as a secure front-door, enforcing traffic governance and observability.', pt: 'Gateway centralizado atuando como front-door seguro, aplicando governan\u00e7a de tr\u00e1fego e observabilidade.' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(1)': { en: 'Implemented automated abuse protection', pt: 'Implementei prote\u00e7\u00e3o automatizada contra abusos' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(2)': { en: 'Enforced real-time rate limiting', pt: 'Apliquei rate limiting em tempo real' },
  '.project-grid article:nth-of-type(2) li:nth-of-type(3)': { en: 'Standardized telemetry, cutting incident triage time by ~30%', pt: 'Padronizei telemetria, reduzindo tempo de triagem de incidentes em ~30%' },
  '.project-grid article:nth-of-type(2) .tags span:nth-of-type(2)': { en: 'API Governance', pt: 'Governan\u00e7a de APIs' },
  
  '.project-grid article:nth-of-type(3) .badge': { en: 'AI + Automation', pt: 'IA + Automa\u00e7\u00e3o' },
  '.project-grid article:nth-of-type(3) h3': { en: 'Semantic Search for KPI and Docs', pt: 'Busca Sem\u00e2ntica para KPIs e Documentos' },
  '.project-grid article:nth-of-type(3) .project-desc': { en: 'RAG pipeline enabling non-technical users to ask natural-language questions and retrieve reliable insights.', pt: 'Pipeline de RAG permitindo que usu\u00e1rios n\u00e3o t\u00e9cnicos consultem KPIs e documentos em linguagem natural.' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(1)': { en: 'Implemented embeddings flow and retrieval strategy', pt: 'Implementei fluxo de embeddings e estrat\u00e9gia de recupera\u00e7\u00e3o' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(2)': { en: 'Connected AI outputs into daily product workflows', pt: 'Conectei sa\u00eddas de IA aos fluxos di\u00e1rios do produto' },
  '.project-grid article:nth-of-type(3) li:nth-of-type(3)': { en: 'Dramatically reduced document discovery time', pt: 'Reduzi drasticamente o tempo de descoberta de documentos' },
  
  '.project-grid article:nth-of-type(4) .badge': { en: 'Operations Integration', pt: 'Integra\u00e7\u00e3o Operacional' },
  '.project-grid article:nth-of-type(4) h3': { en: 'Inventory Request and Live Status System', pt: 'Sistema de Requisi\u00e7\u00e3o de Estoque e Status em Tempo Real' },
  '.project-grid article:nth-of-type(4) .project-desc': { en: 'Integrated legacy data sources with a real-time portal, eliminating manual status-check overhead.', pt: 'Integrei fontes de dados legadas a um portal em tempo real, eliminando o overhead de checagem manual de status.' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(1)': { en: 'Integrated inventory source with request lifecycle', pt: 'Integrei a fonte de estoque ao ciclo de vida da requisi\u00e7\u00e3o' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(2)': { en: 'Added real-time updates via SignalR', pt: 'Adicionei atualiza\u00e7\u00f5es em tempo real via SignalR' },
  '.project-grid article:nth-of-type(4) li:nth-of-type(3)': { en: 'Reduced processing friction and follow-up overhead', pt: 'Reduzi fric\u00e7\u00e3o de processamento e overhead de acompanhamento' },
  
  '.also-built .kicker': { en: 'Also Built', pt: 'Tamb\u00e9m Constru\u00ed' },
  '.also-built-items span:nth-of-type(1)': { en: 'ABC Activity Cost Tracking Platform', pt: 'Plataforma de Custeio por Atividade ABC' },
  '.also-built-items span:nth-of-type(2)': { en: 'Conecta Ideias Collaboration Platform', pt: 'Plataforma Colaborativa Conecta Ideias' },
  '.also-built-items span:nth-of-type(3)': { en: 'Reusable SignalR Notification Hub', pt: 'Hub Reutiliz\u00e1vel de Notifica\u00e7\u00f5es SignalR' },
  '.also-built-items span:nth-of-type(4)': { en: 'HelpDesk Workflow System', pt: 'Sistema de Fluxo HelpDesk' },
  '.also-built-items span:nth-of-type(5)': { en: 'Real-time Chat with RAG + AI', pt: 'Chat em Tempo Real com RAG + IA' },
  
  '#strengths .kicker': { en: 'Why Work With Me', pt: 'Por Que Trabalhar Comigo' },
  '#strengths .section-head h2': { en: 'What I bring to every project', pt: 'O que eu trago para cada projeto' },
  '#strengths .strength-card:nth-of-type(1) h3': { en: 'End-to-End Execution', pt: 'Atua\u00e7\u00e3o de Ponta a Ponta' },
  '#strengths .strength-card:nth-of-type(1) p': { en: 'I contribute across the full technical lifecycle, from initial architecture discussions to deployment and production observability.', pt: 'Atuo em todo o ciclo t\u00e9cnico, das discuss\u00f5es de arquitetura ao deploy e observabilidade em produ\u00e7\u00e3o.' },
  '#strengths .strength-card:nth-of-type(2) h3': { en: 'Security & Governance', pt: 'Seguran\u00e7a e Governan\u00e7a' },
  '#strengths .strength-card:nth-of-type(2) p': { en: 'I treat APIs as critical infrastructure, enforcing strict governance, zero-trust security, and rate limiting via Azure APIM.', pt: 'Trato APIs como infraestrutura cr\u00edtica, aplicando governan\u00e7a estrita, seguran\u00e7a zero-trust e rate limiting via Azure APIM.' },
  '#strengths .strength-card:nth-of-type(3) h3': { en: 'Operational Efficiency', pt: 'Efici\u00eancia Operacional' },
  '#strengths .strength-card:nth-of-type(3) p': { en: 'My main focus is reducing architectural friction and improving system reliability under heavy operational loads.', pt: 'Meu foco principal \u00e9 reduzir o atrito arquitetural e melhorar a confiabilidade do sistema sob altas cargas operacionais.' },
  '#strengths .strength-card:nth-of-type(4) h3': { en: 'Engineering Standards', pt: 'Padr\u00f5es de Engenharia' },
  '#strengths .strength-card:nth-of-type(4) p': { en: 'I prioritize measurable business value, standardizing codebases to accelerate the team\'s delivery cycles.', pt: 'Priorizo valor de neg\u00f3cio mensur\u00e1vel, padronizando bases de c\u00f3digo para acelerar os ciclos de entrega da equipe.' },
  '#strengths .strength-card:nth-of-type(5) h3': { en: 'Business-First Focus', pt: 'Foco no Neg\u00f3cio' },
  '#strengths .strength-card:nth-of-type(5) p': { en: 'Systems built to solve real bottlenecks: operations, workflow automation, inventory tracking, and critical path performance.', pt: 'Sistemas constru\u00eddos para resolver gargalos reais: opera\u00e7\u00f5es, automa\u00e7\u00e3o, estoque e performance de caminhos cr\u00edticos.' },
  '#strengths .strength-card:nth-of-type(6) h3': { en: 'Azure Native', pt: 'Nativo em Azure' },
  '#strengths .strength-card:nth-of-type(6) p': { en: 'Deep expertise in Azure APIM, App Services, Entra ID (OIDC), SQL, Redis, and centralized observability platforms.', pt: 'Profunda experi\u00eancia em Azure APIM, App Services, Entra ID (OIDC), SQL, Redis e plataformas centralizadas de observabilidade.' },
  
  '#stack .kicker': { en: 'Core Stack', pt: 'Stack Principal' },
  '#stack .section-head h2': { en: 'Built around robust .NET enterprise architecture', pt: 'Estruturado sobre arquitetura corporativa robusta em .NET' },
  '#stack .stack-card:nth-of-type(1) h3': { en: 'API Governance Layer', pt: 'Camada de Governan\u00e7a de APIs' },
  '#stack .stack-card:nth-of-type(1) p': { en: 'Azure API Management (APIM), enforcing zero-trust security, rate limiting, and centralized traffic routing.', pt: 'Azure API Management (APIM), aplicando seguran\u00e7a zero-trust, rate limiting e roteamento centralizado.' },
  '#stack .stack-card:nth-of-type(2) h3': { en: 'Backend & Domain Layer', pt: 'Camada de Backend e Dom\u00ednio' },
  '#stack .stack-card:nth-of-type(2) p': { en: 'High-performance ASP.NET Core APIs, Entity Framework Core, background workers, and scalable domain logic.', pt: 'APIs ASP.NET Core de alta performance, EF Core, workers em background e l\u00f3gica de dom\u00ednio escal\u00e1vel.' },
  '#stack .stack-card:nth-of-type(3) h3': { en: 'Data & Performance Layer', pt: 'Camada de Dados e Performance' },
  '#stack .stack-card:nth-of-type(3) p': { en: 'SQL Server/Azure SQL for durability, Redis for low-latency caching, pub/sub messaging, and SignalR for real-time streams.', pt: 'SQL Server/Azure SQL para persist\u00eancia, Redis para cache/pub-sub, e SignalR para fluxos em tempo real.' },
  '#stack .stack-card:nth-of-type(4) h3': { en: 'Application Layer', pt: 'Camada de Aplica\u00e7\u00e3o' },
  '#stack .stack-card:nth-of-type(4) p': { en: 'Secure Blazor Web applications, providing rich interactive UIs natively integrated with .NET backends.', pt: 'Aplica\u00e7\u00f5es seguras em Blazor Web, fornecendo UIs interativas integradas nativamente a backends .NET.' },
  
  '#contact h2': { en: "Let's discuss your next technical initiative", pt: 'Vamos discutir sua pr\u00f3xima iniciativa t\u00e9cnica' },
  '#contact p': { en: "Looking for a Mid-Level .NET Engineer to build reliable backends and accelerate greenfield delivery? Let's talk.", pt: 'Procurando um Engenheiro Pleno .NET para construir backends confi\u00e1veis e acelerar entregas greenfield? Vamos conversar.' },
  '#contact .btn.solid:not(.alt)': { en: 'Send Email', pt: 'Enviar Email' },
  '#contact .btn.solid.alt': { en: 'GitHub Profile', pt: 'Perfil no GitHub' },
  'footer p': { en: 'Pedro Bertoluchi \u2014 Mid-Level .NET Software Engineer', pt: 'Pedro Bertoluchi \u2014 Engenheiro de Software Pleno .NET' }
};

const selectorHtml = {
  '.hero-left h1': {
    en: 'Building reliable <span>.NET</span> and <span>Azure</span> systems, secure integrations, and API governance layers.',
    pt: 'Construindo sistemas confi\u00e1veis em <span>.NET</span> e <span>Azure</span>, integra\u00e7\u00f5es seguras e camadas de governan\u00e7a de APIs.'
  },
  '.about-details li:nth-of-type(1)': {
    en: '<strong>Role:</strong> Mid-Level .NET Engineer (APIs, Azure, Enterprise Integrations)',
    pt: '<strong>Fun\u00e7\u00e3o:</strong> Engenheiro Pleno .NET (APIs, Azure, Integra\u00e7\u00f5es Enterprise)'
  },
  '.about-details li:nth-of-type(2)': {
    en: '<strong>Location:</strong> Porto Ferreira, Sao Paulo, Brazil',
    pt: '<strong>Localiza\u00e7\u00e3o:</strong> Porto Ferreira, S\u00e3o Paulo, Brasil'
  },
  '.about-details li:nth-of-type(3)': {
    en: '<strong>Work model:</strong> Open to global collaboration (Remote/B2B)',
    pt: '<strong>Modelo:</strong> Aberto a colabora\u00e7\u00e3o global (Remoto/B2B)'
  },
  '.about-details li:nth-of-type(4)': {
    en: '<strong>Quick links:</strong> <a href="https://github.com/ThanksUniverse" target="_blank" rel="noopener noreferrer">GitHub</a> &middot; <a href="https://www.linkedin.com/in/pedro-bertoluchi/" target="_blank" rel="noopener noreferrer">LinkedIn</a> &middot; <a href="mailto:pedro.bertoluchi@outlook.com">Email</a>',
    pt: '<strong>Links:</strong> <a href="https://github.com/ThanksUniverse" target="_blank" rel="noopener noreferrer">GitHub</a> &middot; <a href="https://www.linkedin.com/in/pedro-bertoluchi/" target="_blank" rel="noopener noreferrer">LinkedIn</a> &middot; <a href="mailto:pedro.bertoluchi@outlook.com">Email</a>'
  }
};

const langToggle = document.getElementById('lang-toggle');

const applyLanguage = (lang) => {
  const locale = lang === 'pt' ? 'pt' : 'en';
  const dict = i18n[locale];

  document.documentElement.lang = dict.lang;
  document.title = dict.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', dict.description);
  }

  Object.entries(selectorText).forEach(([selector, text]) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = text[locale];
    }
  });

  Object.entries(selectorHtml).forEach(([selector, text]) => {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = text[locale];
    }
  });

  if (langToggle) {
    langToggle.textContent = dict.toggle;
    langToggle.setAttribute('aria-label', locale === 'en' ? 'Mudar idioma para português' : 'Switch language to English');
  }

  window.localStorage.setItem('portfolio-language', locale);
};

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = document.documentElement.lang.startsWith('pt') ? 'en' : 'pt';
    applyLanguage(nextLang);
  });
}

const savedLanguage = window.localStorage.getItem('portfolio-language');
applyLanguage(savedLanguage === 'pt' ? 'pt' : 'en');

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const canTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion;

if (canTilt) {
  const tiltCards = document.querySelectorAll('.tilt');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    });
  });
}
