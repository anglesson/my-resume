/**
 * Anglesson Araujo — Portfolio Cyber-Tech / Omarchy Engine
 * Theme Controller, i18n Translation Engine (EN / PT-BR), Glow Spotlights & Quick Actions
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- TRANSLATION / I18N DICTIONARY ---
  const LANG_STORAGE_KEY = 'ang-portfolio-lang';
  
  const translations = {
    en: {
      nav_about: "~/about",
      nav_projects: "~/projects",
      nav_experience: "~/experience",
      nav_skills: "~/stack",
      nav_education: "~/education",
      
      status_badge: "ALL SYSTEMS NOMINAL • SENIOR SOFTWARE ENGINEER",
      hero_subtitle: "> Senior Software Engineer | Software Architecture & Full Stack",
      hero_bio: "Senior Software Engineer with a Postgraduate MBA in Software Architecture & Solutions from IGTI. Expert in high-performance backend systems with PHP, JavaScript, React, and Vue.js. Proven track record in large-scale system modularization, Domain-Driven Design (DDD), Test-Driven Development (TDD), and distributed cloud-native architectures.",
      
      stat_years: "+10",
      stat_years_label: "Years in Tech",
      stat_role: "Senior",
      stat_role_label: "Software Engineer",
      stat_edu: "MBA",
      stat_edu_label: "Software Architecture",
      
      btn_copy_email: "Copy E-mail",
      terminal_title: "bash — anglesson@workstation:~",
      terminal_btn_copy: "1-Click: Copy Email",
      terminal_btn_msg: "Send Message",
      
      toast_email_copied: "Email [anglesson@outlook.com] copied to clipboard!",
      toast_lang_changed: "Language changed to English [EN]",
      toast_theme_changed: "Theme switched to",
      
      projects_tag: "// showcase",
      projects_title: "Featured Architecture & Projects",
      projects_desc: "Key engineering accomplishments, distributed modules, and enterprise software systems.",
      
      proj1_title: "Order to Pay (OTP) System Modularization",
      proj1_desc: "Architected the decoupling and modularization of the core Order to Pay platform into three decoupled micro-modules: OTP, Contract, and Gran Pro, enforcing Domain-Driven Design (DDD) and Test-Driven Development (TDD).",
      
      proj2_title: "SIGECO & Student Portal Maintenance",
      proj2_desc: "Sustained high-traffic educational web platform serving thousands of students and educators. Maintained PHP (Zend Framework) backend, AngularJS frontend, and optimized MySQL queries for zero-downtime reliability.",
      
      proj3_title: "Executive BI Dashboard & API Integrations",
      proj3_desc: "Engineered real-time management dashboards in PHP/Laravel integrated with Movidesk API, enabling data-driven corporate decision-making and automated educational portal workflows.",
      
      exp_tag: "// career_log",
      exp_title: "Work Experience",
      exp_desc: "Track record in software engineering, system modularization, and corporate IT.",
      
      exp_gran_period: "AUG 2022 — PRESENT",
      exp_gran_role: "Senior Software Engineer",
      exp_gran_company: "GRAN • Full-time",
      exp_gran_b1: "Architected and implemented the modularization of the Order to Pay platform into three standalone modules: OTP, Contract, and Gran Pro.",
      exp_gran_b2: "Applied Domain-Driven Design (DDD) and Test-Driven Development (TDD) to ensure robust test coverage, maintainability, and clean code standards.",
      exp_gran_b3: "Collaborated cross-functionally with product managers, UX designers, and engineering squads to refine technical specs and system architecture.",
      
      exp_gran_s_period: "JAN 2022 — AUG 2022",
      exp_gran_s_role: "Software Engineer | Sustaining Team",
      exp_gran_s_company: "GRAN",
      exp_gran_s_b1: "Maintained and stabilized the SIGECO platform for students, faculty, and coordinators.",
      exp_gran_s_b2: "Diagnosed complex bugs and executed performance tuning across PHP (Zend Framework), AngularJS, and MySQL databases.",
      
      exp_damas_period: "MAR 2018 — DEC 2021",
      exp_damas_role: "Systems & Reporting Analyst",
      exp_damas_company: "Rede Damas Educacional",
      exp_damas_b1: "Developed custom BI dashboards in PHP & Laravel integrated with Movidesk APIs to power institutional KPIs.",
      exp_damas_b2: "Constructed high-performance SQL Server analytical queries, database reporting workflows, and process automation tools.",
      exp_damas_b3: "Spearheaded Google Classroom rollout and conducted technical training across educational network units.",
      
      exp_realnet_period: "SEP 2017 — JAN 2018",
      exp_realnet_role: "IT & Automation Technician",
      exp_realnet_company: "Realnet Tecnologia",
      exp_realnet_b1: "Provided critical support for commercial automation software, dedicated/dialed EFT (TEF), and fiscal hardware.",
      
      exp_cds_period: "MAY 2017 — AUG 2017",
      exp_cds_role: "IT & Database Intern",
      exp_cds_company: "CDS — Consultoria e Desenvolvimento de Sistemas",
      exp_cds_b1: "Managed SQL Server 2008 queries, remote server operations, and electronic invoicing applications.",
      
      skills_tag: "// tech_arsenal",
      skills_title: "Core Stack & Technologies",
      skills_desc: "Key languages, architectures, databases, and engineering tools utilized in daily development.",
      
      cat_backend: "Backend & Architecture",
      cat_frontend: "Frontend & UI",
      cat_data: "Data & Persistence",
      cat_devops: "DevOps & Engineering",
      
      edu_tag: "// credentials",
      edu_title: "Education & Certifications",
      edu_desc: "Formal degree programs, postgraduate specialization, and technical certifications.",
      
      edu_mba_type: "Postgraduate Lato Sensu (MBA)",
      edu_mba_title: "Software Architecture & Solutions",
      edu_mba_inst: "IGTI — Instituto de Gestão e Tecnologia da Informação",
      edu_mba_year: "2023 — 2024",
      
      edu_grad_type: "Higher Education Degree",
      edu_grad_title: "Systems Analysis and Development",
      edu_grad_inst: "UNINASSAU",
      edu_grad_year: "2018 — 2020",
      
      edu_tech_type: "Technical Degree",
      edu_tech_title: "Systems Development Technician",
      edu_tech_inst: "ETEMB — Escola Técnica Estadual Miguel Batista",
      edu_tech_year: "2016 — 2018",
      
      cert_section_title: "Technical Certifications & Courses",
      cert1: "PHP & Clean Architecture: Deconstructing Software Architecture",
      cert2: "PHP Mocks: Test Doubles & Unit Testing",
      cert3: "Docker: Containers from Ground Up",
      cert4: "Doctrine: PHP ORM Deep-dive",
      cert5: "Scrum Foundation Professional Certificate (SFPC) — CertiProf",
      
      footer_status: "[● SYSTEM ARCHITECTURE: ACTIVE] • Anglesson Araújo",
      footer_desc: "Engineered with modern web standards, JetBrains Mono typography, and Omarchy-inspired aesthetics."
    },
    pt: {
      nav_about: "~/sobre",
      nav_projects: "~/projetos",
      nav_experience: "~/experiencia",
      nav_skills: "~/stack",
      nav_education: "~/formacao",
      
      status_badge: "TODOS OS SISTEMAS OPERACIONAIS • ENGENHEIRO DE SOFTWARE SÊNIOR",
      hero_subtitle: "> Engenheiro de Software Sênior | Arquitetura de Software & Full Stack",
      hero_bio: "Engenheiro de Software Sênior com Pós-graduação (MBA) em Arquitetura de Software e Soluções pelo IGTI. Especialista em sistemas de alta performance com PHP, JavaScript, React e Vue.js. Histórico comprovado em modularização de sistemas em larga escala, Domain-Driven Design (DDD), Test-Driven Development (TDD) e arquiteturas escaláveis.",
      
      stat_years: "+10",
      stat_years_label: "Anos em Tecnologia",
      stat_role: "Sênior",
      stat_role_label: "Software Engineer",
      stat_edu: "MBA",
      stat_edu_label: "Arquitetura de Software",
      
      btn_copy_email: "Copiar E-mail",
      terminal_title: "bash — anglesson@workstation:~",
      terminal_btn_copy: "1-Clique: Copiar Email",
      terminal_btn_msg: "Enviar Mensagem",
      
      toast_email_copied: "Email [anglesson@outlook.com] copiado para a área de transferência!",
      toast_lang_changed: "Idioma alterado para Português [PT-BR]",
      toast_theme_changed: "Tema alterado para",
      
      projects_tag: "// showcase",
      projects_title: "Projetos & Arquitetura em Destaque",
      projects_desc: "Principais realizações de engenharia, módulos distribuídos e plataformas corporativas.",
      
      proj1_title: "Modularização do Sistema Order to Pay (OTP)",
      proj1_desc: "Arquitetura e desacoplamento do sistema Order to Pay em três módulos independentes: OTP, Contract e Gran Pro, aplicando Domain-Driven Design (DDD) e Test-Driven Development (TDD).",
      
      proj2_title: "Sustentação da Plataforma SIGECO",
      proj2_desc: "Sustentação de plataforma educacional de alto tráfego para alunos e professores. Manutenção de backend em PHP (Zend Framework), frontend em AngularJS e queries otimizadas em MySQL com alta disponibilidade.",
      
      proj3_title: "Painel de Gestão BI & Integrações com APIs",
      proj3_desc: "Desenvolvimento de dashboards de gestão em tempo real em PHP/Laravel integrados à API Movidesk, apoiando decisões estratégicas da liderança e automatizando fluxos educacionais.",
      
      exp_tag: "// career_log",
      exp_title: "Experiência Profissional",
      exp_desc: "Histórico de atuação em engenharia de software, modularização de sistemas e TI corporativa.",
      
      exp_gran_period: "AGO 2022 — PRESENTE",
      exp_gran_role: "Engenheiro de Software Sênior",
      exp_gran_company: "GRAN • Tempo integral",
      exp_gran_b1: "Arquitetura e desenvolvimento da modularização do sistema Order to Pay em três módulos distintos: OTP, Contract e Gran Pro.",
      exp_gran_b2: "Aplicação de práticas avançadas como Domain-Driven Design (DDD) e Test-Driven Development (TDD) para garantir cobertura e código de alta manutenibilidade.",
      exp_gran_b3: "Atuação em conjunto com squads de produto, design e liderança técnica na definição de requisitos e melhoria contínua da arquitetura.",
      
      exp_gran_s_period: "JAN 2022 — AGO 2022",
      exp_gran_s_role: "Engenheiro de Software | Sustentação",
      exp_gran_s_company: "GRAN",
      exp_gran_s_b1: "Sustentação e estabilização do sistema SIGECO utilizado por milhares de alunos, docentes e coordenadores.",
      exp_gran_s_b2: "Resolução de incidentes complexos, correções de bugs e otimizações em PHP (Zend Framework), AngularJS e banco MySQL.",
      
      exp_damas_period: "MAR 2018 — DEZ 2021",
      exp_damas_role: "Analista de Relatórios & Sistemas",
      exp_damas_company: "Rede Damas Educacional",
      exp_damas_b1: "Desenvolvimento de painel de gestão à vista em PHP e Laravel integrado à API Movidesk para acompanhamento de KPIs.",
      exp_damas_b2: "Construção de relatórios analíticos de alta performance com otimização de consultas em SQL Server e automação de processos corporativos.",
      exp_damas_b3: "Implantação do Google Sala de Aula e capacitação tecnológica para o corpo docente da rede de ensino.",
      
      exp_realnet_period: "SET 2017 — JAN 2018",
      exp_realnet_role: "Técnico em Informática & Automação",
      exp_realnet_company: "Realnet Tecnologia",
      exp_realnet_b1: "Suporte especializado a sistemas de automação comercial, TEF discado e dedicado, e periféricos fiscais.",
      
      exp_cds_period: "MAI 2017 — AGO 2017",
      exp_cds_role: "Estagiário de TI & Banco de Dados",
      exp_cds_company: "CDS — Consultoria e Desenvolvimento de Sistemas",
      exp_cds_b1: "Suporte técnico, administração de queries em SQL Server 2008 e operação de rotinas de faturamento e notas fiscais.",
      
      skills_tag: "// tech_arsenal",
      skills_title: "Core Stack & Tecnologias",
      skills_desc: "Linguagens, arquiteturas, bancos de dados e ferramentas aplicadas no desenvolvimento diário.",
      
      cat_backend: "Backend & Arquitetura",
      cat_frontend: "Frontend & UI",
      cat_data: "Dados & Persistência",
      cat_devops: "DevOps & Engenharia",
      
      edu_tag: "// credentials",
      edu_title: "Formação & Certificações",
      edu_desc: "Pós-graduação, graduação acadêmica e certificações técnicas comprovadas.",
      
      edu_mba_type: "Pós-Graduação Lato Sensu (MBA)",
      edu_mba_title: "Arquitetura de Software e Soluções",
      edu_mba_inst: "IGTI — Instituto de Gestão e Tecnologia da Informação",
      edu_mba_year: "2023 — 2024",
      
      edu_grad_type: "Graduação Tecnológica",
      edu_grad_title: "Análise e Desenvolvimento de Sistemas",
      edu_grad_inst: "UNINASSAU",
      edu_grad_year: "2018 — 2020",
      
      edu_tech_type: "Formação Técnica",
      edu_tech_title: "Técnico em Desenvolvimento de Sistemas",
      edu_tech_inst: "ETEMB — Escola Técnica Estadual Miguel Batista",
      edu_tech_year: "2016 — 2018",
      
      cert_section_title: "Certificações Técnicas & Cursos",
      cert1: "PHP e Clean Architecture: Descomplicando Arquitetura de Software",
      cert2: "Mocks em PHP: Entenda os Dublês de Testes (TDD/Unit)",
      cert3: "Docker: Criando Containers Sem Dor de Cabeça",
      cert4: "Doctrine: Conhecendo um ORM PHP",
      cert5: "Scrum Foundation Professional Certificate (SFPC) — CertiProf",
      
      footer_status: "[● SISTEMA ATIVO] • Anglesson Araújo",
      footer_desc: "Construído com padrões modernos da web, tipografia JetBrains Mono e design inspirado no Omarchy."
    }
  };

  // --- I18N ENGINE ---
  let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const currentLangLabel = document.getElementById('current-lang-name');

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    
    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    // Replace all text elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update terminal JSON strings if present
    const terminalRole = document.getElementById('terminal-json-role');
    const terminalAvail = document.getElementById('terminal-json-avail');
    if (terminalRole && terminalAvail) {
      if (lang === 'pt') {
        terminalRole.textContent = '"Engenheiro de Software Sênior"';
        terminalAvail.textContent = '"Aberto para projetos de engenharia e arquitetura de software"';
      } else {
        terminalRole.textContent = '"Senior Software Engineer"';
        terminalAvail.textContent = '"Open for software architecture & senior engineering opportunities"';
      }
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'pt' : 'en';
      setLanguage(nextLang);
      showToast(translations[nextLang].toast_lang_changed);
    });
  }

  // Initialize Language (Default EN)
  setLanguage(currentLang);


  // --- THEME ENGINE ---
  const THEME_STORAGE_KEY = 'ang-portfolio-theme';
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeDropdown = document.getElementById('theme-dropdown');
  const themeOptions = document.querySelectorAll('.theme-option');
  const currentThemeLabel = document.getElementById('current-theme-name');

  const themes = {
    'tokyo-night': 'Tokyo Night',
    'vantablack': 'Vantablack',
    'cyber-neon': 'Cyber Neon',
    'synthwave': 'Synthwave'
  };

  const applyTheme = (themeName) => {
    if (!themes[themeName]) themeName = 'tokyo-night';
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_STORAGE_KEY, themeName);

    if (currentThemeLabel) {
      currentThemeLabel.textContent = themes[themeName];
    }

    themeOptions.forEach(opt => {
      if (opt.getAttribute('data-theme-val') === themeName) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  };

  // Init Theme
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'tokyo-night';
  applyTheme(savedTheme);

  // Dropdown Toggle
  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('show');
    });

    themeOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selected = option.getAttribute('data-theme-val');
        applyTheme(selected);
        themeDropdown.classList.remove('show');
        const prefix = currentLang === 'pt' ? 'Tema alterado para' : 'Theme switched to';
        showToast(`${prefix} [${themes[selected]}]`);
      });
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('show');
    });
  }

  // --- MOUSE-REACTIVE GLOW SPOTLIGHT ON CARDS ---
  const glowCards = document.querySelectorAll('.glow-card');
  glowCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --- TOAST NOTIFICATION SYSTEM ---
  let toastTimeout;
  window.showToast = function(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-terminal"></i> <span>${message}</span>`;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  // --- CLIPBOARD COPY ACTIONS ---
  window.copyToClipboard = function(text, successMessage) {
    const msg = successMessage || (currentLang === 'pt' ? `Copiado: ${text}` : `Copied: ${text}`);
    navigator.clipboard.writeText(text).then(() => {
      showToast(msg);
    }).catch(() => {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast(msg);
    });
  };

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // --- NATIVE SCROLLSPY ---
  const sections = document.querySelectorAll('section[id]');
  const handleScrollSpy = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (targetLink) targetLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy);
  handleScrollSpy();
});
