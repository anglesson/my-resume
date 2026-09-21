/**
 * Anglesson Araújo — Personal Services Landing Page Engine
 * Apple-Style Minimalist Light, Internationalization (PT-BR / EN), Spotlight Cards, & Direct Inquiries
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- TRANSLATION / I18N DICTIONARY ---
  const LANG_STORAGE_KEY = 'ang-portfolio-lang';

  const translations = {
    pt: {
      // Header
      nav_services: "Serviços",
      nav_methodology: "Metodologia",
      nav_stack: "Diferenciais",
      nav_cases: "Casos de Impacto",
      nav_contact: "Contato",
      cta_header: "Falar no WhatsApp",

      // Hero
      hero_badge: "Disponível para novos projetos & consultoria técnica",
      hero_title_1: "Arquitetura de Software e Engenharia de Alta Performance",
      hero_title_2: "para Negócios em Escala",
      hero_subtitle: "Elimino gargalos críticos de tecnologia, desacoplo monólitos em sistemas resilientes e construo soluções digitais sob medida preparadas para suportar o crescimento sustentável da sua empresa.",
      hero_cta_primary: "Iniciar um Projeto",
      hero_cta_secondary: "Conhecer Serviços",
      stat_years_val: "+10 Anos",
      stat_years_label: "Experiência em Engenharia",
      stat_role_val: "MBA",
      stat_role_label: "Arquitetura de Software",
      stat_impact_val: "100%",
      stat_impact_label: "Foco em Entrega & ROI",

      // Services
      services_tag: "SOLUÇÕES & SERVIÇOS",
      services_title: "Engenharia estratégica desenhada para o seu negócio",
      services_desc: "Soluções completas desde o diagnóstico e desenho arquitetural até a entrega em produção com zero débito técnico.",

      // Service 1
      srv1_badge: "ARQUITETURA & CLOUD",
      srv1_title: "Arquitetura & Desacoplamento de Monólitos",
      srv1_problem: "Monólitos legados geram deploys lentos, riscos constantes de regressão e travam o ritmo de entrega do time de tecnologia.",
      srv1_d1: "Modelagem de domínios estratégicos com Domain-Driven Design (DDD)",
      srv1_d2: "Desacoplamento em microsserviços ou micro-módulos autônomos",
      srv1_d3: "Arquiteturas escaláveis e preparadas para nuvem com alta disponibilidade",
      srv1_d4: "Bateria de testes automatizados com cobertura rigorosa em TDD",
      srv1_cta: "Solicitar Diagnóstico Arquitetural →",

      // Service 2
      srv2_badge: "DESENVOLVIMENTO SOB MEDIDA",
      srv2_title: "Sistemas Web Full-Stack & APIs de Alta Performance",
      srv2_problem: "Necessidade de lançar produtos críticos com rapidez sem abrir mão de performance, escalabilidade e manutenibilidade futura.",
      srv2_d1: "Backends robustos em PHP (Laravel) e Node.js (TypeScript)",
      srv2_d2: "Frontends modernos, responsivos e de carregamento ultrarrápido (React, Vue, Tailwind)",
      srv2_d3: "APIs RESTful e GraphQL resilientes com contratos estritos",
      srv2_d4: "Padrões de engenharia limpa e testes unitários de ponta a ponta",
      srv2_cta: "Construir Solução Sob Medida →",

      // Service 3
      srv3_badge: "INTEGRAÇÃO & APIS",
      srv3_title: "Integrações Críticas & Ecossistemas Digitais",
      srv3_problem: "Silos de dados operacionais e ferramentas legadas que não conversam com novos ecossistemas, ERPs ou gateways de mercado.",
      srv3_d1: "Conexão segura entre ERPs, CRMs, pagamentos e plataformas terceiras",
      srv3_d2: "Processamento assíncrono, webhooks e filas de mensageria",
      srv3_d3: "Controle de tráfego, autenticação e tolerância a falhas de APIs",
      srv3_d4: "Pipelines confiáveis para sincronização de dados de negócio",
      srv3_cta: "Integrar Ecossistema →",

      // Service 4
      srv4_badge: "CONSULTORIA TÉCNICA",
      srv4_title: "Auditoria de Código & Otimização de Performance",
      srv4_problem: "Bancos de dados lentos, quedas sob pico de tráfego e dúvidas sobre como direcionar a evolução da stack e infraestrutura.",
      srv4_d1: "Profiling e tuning profundo de consultas em PostgreSQL e MySQL",
      srv4_d2: "Diagnóstico detalhado de segurança e débitos técnicos acumulados",
      srv4_d3: "Roadmap prático para redução de latência e otimização de custos de nuvem",
      srv4_d4: "Mentoria arquitetural e alinhamento com lideranças técnicas",
      srv4_cta: "Agendar Auditoria de Performance →",

      // Methodology
      method_tag: "METODOLOGIA DE ALTO NÍVEL",
      method_title: "Processo transparente, ágil e focado em resultados",
      method_step1_num: "01",
      method_step1_title: "Diagnóstico & Alinhamento",
      method_step1_desc: "Mapeamento aprofundado dos gargalos, análise das regras de negócio e definição de metas claras de retorno sobre o investimento.",
      method_step2_num: "02",
      method_step2_title: "Arquitetura & Estratégia",
      method_step2_desc: "Desenho do blueprint arquitetural, modelagem de dados, especificação de interfaces e seleção da stack ideal.",
      method_step3_num: "03",
      method_step3_title: "Construção Ágil & TDD",
      method_step3_desc: "Desenvolvimento em sprints iterativas com cobertura automatizada de testes, validações contínuas e visibilidade total.",
      method_step4_num: "04",
      method_step4_title: "Entrega & Observabilidade",
      method_step4_desc: "Deploy automatizado em produção com telemetria, documentação de handover e suporte para sustentação autônoma.",

      // Stack
      stack_tag: "PADRÕES ENTERPRISE",
      stack_title: "Tecnologias e Práticas de Alta Confiabilidade",
      stack_desc: "Utilizo ferramentas consolidadas e abordagens arquiteturais modernas para entregar soluções duráveis, sem modismos ou dependências desnecessárias.",
      stack_cat_arch: "Arquitetura & Design",
      stack_cat_quality: "Qualidade & Entrega",
      stack_cat_backend: "Backend & Dados",
      stack_cat_frontend: "Frontend & Interface",

      // Cases
      cases_tag: "CASOS DE IMPACTO",
      cases_title: "Resultados práticos entregues a operações reais",
      cases_desc: "Exemplos de desafios corporativos complexos transformados em sistemas eficientes e estáveis.",
      case1_badge: "MODULARIZAÇÃO DE MONÓLITO",
      case1_title: "Desacoplamento de Núcleo Financeiro & Faturamento",
      case1_metric: "-40% tempo de deploy",
      case1_desc: "Modularização de regras críticas de faturamento e pagamentos em monólito corporativo de grande escala, eliminando riscos de regressão e viabilizando deploys autônomos.",
      case2_badge: "ALTO TRÁFEGO & ESTABILIDADE",
      case2_title: "Estabilização e Tuning de Plataforma Web de Alta Concorrência",
      case2_metric: "100% de estabilidade sob pico",
      case2_desc: "Otimização aprofundada de consultas SQL, modelagem de índices e arquitetura de cache em multicamadas para absorver picos massivos de acessos simultâneos com estabilidade contínua.",
      case3_badge: "DADOS & BUSINESS INTELLIGENCE",
      case3_title: "Arquitetura de Dashboards Executivos e Métricas em Tempo Real",
      case3_metric: "Tempo de resposta sub-segundo",
      case3_desc: "Consolidação de pipelines analíticos desacoplados da base transacional principal, entregando relatórios gerenciais e KPIs instantâneos para tomada de decisão estratégica.",

      // Final CTA
      cta_tag: "VAMOS CONVERSAR",
      cta_title: "Pronto para transformar sua engenharia em uma vantagem competitiva?",
      cta_subtitle: "Seja para modernizar sistemas existentes, construir uma solução do zero ou auditar sua arquitetura técnica, estou à disposição para apoiar seu negócio.",
      btn_whatsapp: "Conversar no WhatsApp",
      btn_email: "Enviar E-mail Direto",
      btn_copy_email: "Copiar E-mail",

      // Footer
      footer_location: "Brasília - DF, Brasil • Atendimento Global",
      footer_status: "Disponível para contratos PJ de desenvolvimento e consultoria estratégica",
      footer_rights: "© 2026 Anglesson Araújo. Todos os direitos reservados.",

      // Toasts
      toast_copied: "E-mail copiado para a área de transferência: contato@anglesson.com.br",
      toast_lang: "Idioma alterado para Português [PT-BR]"
    },

    en: {
      // Header
      nav_services: "Services",
      nav_methodology: "Methodology",
      nav_stack: "Expertise",
      nav_cases: "Case Studies",
      nav_contact: "Contact",
      cta_header: "Chat on WhatsApp",

      // Hero
      hero_badge: "Available for new projects & technical consulting",
      hero_title_1: "Software Architecture & High-Impact Engineering",
      hero_title_2: "for Scaling Businesses",
      hero_subtitle: "I resolve mission-critical technology bottlenecks, decouple monolithic systems into resilient architectures, and build custom web platforms engineered for sustainable business growth.",
      hero_cta_primary: "Start a Project",
      hero_cta_secondary: "Explore Services",
      stat_years_val: "+10 Years",
      stat_years_label: "Engineering Experience",
      stat_role_val: "MBA",
      stat_role_label: "Software Architecture",
      stat_impact_val: "100%",
      stat_impact_label: "Focus on Delivery & ROI",

      // Services
      services_tag: "SOLUTIONS & SERVICES",
      services_title: "Strategic engineering designed for your business",
      services_desc: "End-to-end technical solutions from initial architectural discovery to production rollout with zero technical debt.",

      // Service 1
      srv1_badge: "ARCHITECTURE & CLOUD",
      srv1_title: "Architecture & Monolith Decoupling",
      srv1_problem: "Tangled legacy monoliths create sluggish deployments, constant regression risks, and slow down your engineering squads.",
      srv1_d1: "Domain-Driven Design (DDD) bounded contexts & strategic domain modeling",
      srv1_d2: "Decoupling into autonomous microservices or modular bounded packages",
      srv1_d3: "Resilient cloud architectures built for high concurrency and uptime",
      srv1_d4: "Automated regression test harness enforcing rigorous TDD standards",
      srv1_cta: "Request Architecture Diagnostic →",

      // Service 2
      srv2_badge: "CUSTOM SOLUTIONS",
      srv2_title: "Full-Stack Web Systems & High-Throughput APIs",
      srv2_problem: "Need to ship mission-critical digital products swiftly without compromising speed, long-term scalability, or code quality.",
      srv2_d1: "Robust backends engineered in PHP (Laravel) and Node.js (TypeScript)",
      srv2_d2: "Modern, reactive, and responsive frontends (React, Vue, Tailwind CSS)",
      srv2_d3: "Low-latency RESTful and GraphQL APIs with strict contract boundaries",
      srv2_d4: "Clean code principles and comprehensive end-to-end unit test suites",
      srv2_cta: "Build Custom Solution →",

      // Service 3
      srv3_badge: "INTEGRATION & APIS",
      srv3_title: "Critical Integrations & Digital Ecosystems",
      srv3_problem: "Data silos and legacy enterprise tools failing to communicate reliably with modern partner platforms and third-party APIs.",
      srv3_d1: "Secure integration across ERPs, CRMs, and payment gateways",
      srv3_d2: "Asynchronous event pipelines, webhooks, and resilient message queues",
      srv3_d3: "API traffic management, authentication, rate-limiting, and fault tolerance",
      srv3_d4: "Dependable data synchronization pipelines with automated recovery",
      srv3_cta: "Integrate Ecosystem →",

      // Service 4
      srv4_badge: "TECHNICAL ADVISORY",
      srv4_title: "Code Audits & Performance Diagnostics",
      srv4_problem: "Slow database queries, server crashes during traffic spikes, and uncertainty regarding tech stack direction.",
      srv4_d1: "Deep query profiling and index tuning for PostgreSQL and MySQL",
      srv4_d2: "Comprehensive architectural health checks and technical debt audits",
      srv4_d3: "Actionable roadmap for latency reduction and infrastructure cost savings",
      srv4_d4: "Technical mentoring and strategic alignment for engineering leaders",
      srv4_cta: "Schedule Performance Audit →",

      // Methodology
      method_tag: "HIGH-END METHODOLOGY",
      method_title: "Transparent, agile, and results-focused process",
      method_step1_num: "01",
      method_step1_title: "Discovery & Alignment",
      method_step1_desc: "In-depth mapping of technical bottlenecks, business rules, and defining measurable return on investment milestones.",
      method_step2_num: "02",
      method_step2_title: "Architecture & Blueprint",
      method_step2_desc: "Designing the architectural blueprint, data schema, contract interfaces, and selecting the optimal technology stack.",
      method_step3_num: "03",
      method_step3_title: "Agile Delivery & TDD",
      method_step3_desc: "Iterative sprint delivery backed by automated test suites, continuous reviews, and complete stakeholder visibility.",
      method_step4_num: "04",
      method_step4_title: "Deploy & Observability",
      method_step4_desc: "Assisted zero-downtime production deployment, telemetry instrumentation, and thorough documentation for autonomy.",

      // Stack
      stack_tag: "ENTERPRISE STANDARDS",
      stack_title: "Technologies & High-Reliability Standards",
      stack_desc: "Leveraging proven, durable technologies and modern architectural methodologies without fleeting trends or unnecessary complexity.",
      stack_cat_arch: "Architecture & Design",
      stack_cat_quality: "Quality & Delivery",
      stack_cat_backend: "Backend & Data",
      stack_cat_frontend: "Frontend & UI",

      // Cases
      cases_tag: "PROVEN TRACK RECORD",
      cases_title: "Real-world impact delivered to production environments",
      cases_desc: "Examples of high-stakes corporate challenges transformed into stable, high-performance software systems.",
      case1_badge: "MONOLITH MODULARIZATION",
      case1_title: "Core Billing & Payment System Modularization",
      case1_metric: "-40% deploy lead time",
      case1_desc: "Decoupled mission-critical billing and payment logic from an enterprise monolith, eliminating production regression risks and unlocking autonomous squad deploys.",
      case2_badge: "HIGH CONCURRENCY & UPTIME",
      case2_title: "High-Traffic Web Platform Stabilization & Tuning",
      case2_metric: "100% peak uptime",
      case2_desc: "Database indexing, deep query optimization, and multi-layer caching to effortlessly absorb heavy concurrent user spikes with zero service degradation.",
      case3_badge: "DATA & BUSINESS INTELLIGENCE",
      case3_title: "Real-Time Executive Analytics & BI Architecture",
      case3_metric: "Sub-second response time",
      case3_desc: "Engineered dedicated analytical reporting pipelines decoupled from the transactional database, empowering leadership with real-time operational insights.",

      // Final CTA
      cta_tag: "LET'S CONNECT",
      cta_title: "Ready to turn your technology into a competitive advantage?",
      cta_subtitle: "Whether modernizing existing software, engineering a new product from scratch, or auditing your architecture, I am ready to help.",
      btn_whatsapp: "Chat on WhatsApp",
      btn_email: "Send Direct Email",
      btn_copy_email: "Copy Email",

      // Footer
      footer_location: "Brasília, Brazil • Global Delivery",
      footer_status: "Available for technical consulting and corporate engineering contracts",
      footer_rights: "© 2026 Anglesson Araújo. All rights reserved.",

      // Toasts
      toast_copied: "Email copied to clipboard: contato@anglesson.com.br",
      toast_lang: "Language changed to English [EN]"
    }
  };

  // --- STATE & INITIALIZATION ---
  let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'pt';
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const currentLangLabel = document.getElementById('current-lang-name');

  // --- TOAST NOTIFICATIONS ---
  let toastTimer = null;
  const showToast = (message) => {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // --- I18N ENGINE ---
  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    // Replace text in all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update dynamic WhatsApp link message according to active language
    const whatsappBtn = document.getElementById('hero-whatsapp-btn');
    const headerWhatsappBtn = document.getElementById('header-whatsapp-btn');
    const footerWhatsappBtn = document.getElementById('footer-whatsapp-btn');

    const waMsg = lang === 'pt'
      ? encodeURIComponent("Olá Anglesson! Acessei seu site e gostaria de conversar sobre um projeto de arquitetura/desenvolvimento de software.")
      : encodeURIComponent("Hi Anglesson! I visited your website and would like to discuss a software architecture/development project.");

    const waUrl = `https://wa.me/5561999999999?text=${waMsg}`; // Fallback placeholder, can also use direct contact

    [whatsappBtn, headerWhatsappBtn, footerWhatsappBtn].forEach(btn => {
      if (btn) {
        btn.href = `https://api.whatsapp.com/send?phone=5561981084223&text=${waMsg}`;
      }
    });
  };

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'pt' ? 'en' : 'pt';
      applyLanguage(nextLang);
      showToast(translations[nextLang].toast_lang);
    });
  }

  // Initialize Language
  applyLanguage(currentLang);

  // --- CLIPBOARD COPY HELPER ---
  window.copyEmailToClipboard = () => {
    const email = 'contato@anglesson.com.br';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(translations[currentLang].toast_copied);
      }).catch(() => {
        promptFallback(email);
      });
    } else {
      promptFallback(email);
    }
  };

  const promptFallback = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(translations[currentLang].toast_copied);
    } catch (e) {
      window.location.href = `mailto:${text}`;
    }
    document.body.removeChild(textArea);
  };

  // --- MOUSE-REACTIVE SPOTLIGHT ON CARDS ---
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --- MOBILE NAVIGATION DRAWER ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      document.body.classList.toggle('overflow-hidden', !isOpen);
    };

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
        mobileMenuBtn.focus();
      }
    });
  }

  // --- NAVBAR SCROLL BLUR ENHANCEMENT ---
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('border-black/[0.08]', 'bg-white/95', 'shadow-sm');
      header?.classList.remove('border-black/[0.04]', 'bg-white/80');
    } else {
      header?.classList.remove('border-black/[0.08]', 'bg-white/95', 'shadow-sm');
      header?.classList.add('border-black/[0.04]', 'bg-white/80');
    }
  }, { passive: true });
});
