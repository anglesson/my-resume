<!--
Sync Impact Report
- Version change: 0.0.0 (template) → 1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] → I. Vanilla-First & Zero Runtime Overhead (Pure Web Standards)
  - [PRINCIPLE_2_NAME] → II. First-Class Internationalization & 100% Content Parity (EN / PT-BR)
  - [PRINCIPLE_3_NAME] → III. Universal Accessibility (a11y) & WCAG 2.1 AA Compliance
  - [PRINCIPLE_4_NAME] → IV. Cyber-Tech Design System & Multi-Theme Cohesion
  - [PRINCIPLE_5_NAME] → V. Content Integrity & Verifiable Professional Narrative
- Added sections:
  - Technical Standards & Performance Budgets
  - Development Workflow & Quality Gates
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ Aligned (Constitution gates map directly to core principles)
  - .specify/templates/spec-template.md: ✅ Aligned (Covers functional requirements, i18n, and a11y criteria)
  - .specify/templates/tasks-template.md: ✅ Aligned (Covers setup, UI, i18n, and verification tasks)
- Follow-up TODOs: None
-->

# Anglesson Araújo Portfolio & Resume Constitution

## Core Principles

### I. Vanilla-First & Zero Runtime Overhead (Pure Web Standards)
All features, layouts, and interactions MUST be implemented using pure, standard web technologies:
- Semantic HTML5 markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Modern CSS3 utilizing CSS Custom Properties, Flexbox, and CSS Grid without external CSS utility frameworks.
- Zero-build, vanilla JavaScript (ES6+) without heavy frontend framework runtimes (e.g., React, Vue, Angular runtime bundles) or client-side build pipelines.
- Progressive Enhancement: Core portfolio content, typography, and structure MUST remain fully readable and operable even if JavaScript is unavailable or disabled.

*Rationale*: As the portfolio of a Senior Software Engineer and Software Architect, the codebase itself is a technical showcase demonstrating mastery of web platform fundamentals, near-zero load times, minimal dependencies, and long-term durability.

### II. First-Class Internationalization & 100% Content Parity (EN / PT-BR)
Bilingual support (English `EN` and Brazilian Portuguese `PT-BR`) is a mandatory, first-class architectural requirement:
- 100% Content Parity: Every public string, section title, job bullet point, project description, status badge, and dynamic toast MUST exist in both English and Portuguese.
- Translation Architecture: All localized strings MUST be registered in the `translations` dictionary inside [js/scripts.js](file:///Users/ang/Documents/my-resume/js/scripts.js) and bound via `data-i18n` attributes.
- No Hardcoded Strings: Committing user-facing English or Portuguese text directly into [index.html](file:///Users/ang/Documents/my-resume/index.html) without a corresponding translation key is strictly prohibited.
- State Persistence: Active language selection MUST persist across sessions using `localStorage` and respect client locale defaults on initial visit.

*Rationale*: The portfolio represents the author to global engineering organizations as well as the Brazilian tech ecosystem; partial or missing translations compromise professional polish.

### III. Universal Accessibility (a11y) & WCAG 2.1 AA Compliance
Accessibility is non-negotiable across every interactive component:
- Keyboard Navigability: Every interactive element (theme dropdown, language toggle, terminal copy buttons, navigation links) MUST be fully reachable and operable via keyboard (`Tab`, `Enter`, `Space`, `Escape`) with visible focus indicators.
- ARIA Attributes: All icon-only buttons and dynamic controls MUST have descriptive `aria-label`, `aria-expanded`, or `aria-live` attributes.
- Contrast Standards: Text and UI controls across all theme presets MUST meet or exceed WCAG 2.1 AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text and interactive components).
- Reduced Motion: Ambient glows, animated grid backdrops, and hover transitions MUST honor the `prefers-reduced-motion` media query.
- Touch Targets: Mobile touch targets MUST measure at least 44x44 CSS pixels.

*Rationale*: High aesthetic polish must never compromise usability, screen reader compatibility, or accessibility for any user.

### IV. Cyber-Tech Design System & Multi-Theme Cohesion
Visual styling MUST adhere to the established Cyber-Tech / Omarchy terminal design language:
- Visual Identity: Design elements MUST incorporate terminal motifs (`~/section` naming, status badges, prompt lines, ambient glow highlights, subtle grid backgrounds).
- Theme System: All themes (e.g., Tokyo Night, Matrix, Cyber-Tech, Dracula) MUST be configured exclusively through CSS Custom Properties attached to `[data-theme="<name>"]`. Hardcoded color literals within layout rules are prohibited.
- Visual Stability: Switching themes or languages MUST NOT cause layout shifts (CLS), flashing unstyled content, or clipped text.

*Rationale*: A consistent, cohesive design system communicates architectural discipline, attention to detail, and a distinct professional identity.

### V. Content Integrity & Verifiable Professional Narrative
All published career data MUST maintain strict factual accuracy and engineering rigor:
- Truthful Representation: Career logs, employment dates, roles, degrees (e.g., MBA in Software Architecture), and technical skills MUST be verifiable and accurate.
- Architectural Clarity: Descriptions of past achievements (e.g., financial core modularization, high-concurrency platform tuning, executive analytics) MUST articulate domain challenges, architectural methodologies (DDD, TDD, microservices, decoupling), and measurable outcomes.
- Asset Synchronization: External links, downloadable resume PDFs, and contact endpoints MUST remain verified, operational, and in sync with on-page content.

*Rationale*: The portfolio is a direct reflection of engineering reputation and reliability; accuracy and clear architectural storytelling are paramount.

## Technical Standards & Performance Budgets

- **Performance Budgets**:
  - First Contentful Paint (FCP): <= 1.0s on 4G networks.
  - Largest Contentful Paint (LCP): <= 1.5s.
  - Cumulative Layout Shift (CLS): <= 0.02.
  - Total Blocking Time (TBT): 0ms.
- **Asset Discipline**:
  - Image assets MUST be optimized (compressed WebP/PNG/JPEG) with explicit `width` and `height` dimensions to prevent layout shifts.
  - External assets are restricted to essential, high-availability CDNs (e.g., Font Awesome for icons).
- **Cross-Browser Support**:
  - Flawless visual and functional performance on the latest two major releases of Chromium, Firefox, Safari (desktop & iOS), and Edge.

## Development Workflow & Quality Gates

All changes to the portfolio MUST pass the following pre-merge verification gates:
1. **Markup & Style Integrity**: Valid HTML5 structure, valid CSS3 syntax, zero undefined CSS variables, and zero unhandled console warnings/errors.
2. **i18n Parity Audit**: Verification that both `en` and `pt` dictionaries in `scripts.js` contain all keys used by `data-i18n` elements.
3. **Multi-Theme & Contrast Audit**: Verification that changes display legibly across Tokyo Night and all configured theme options.
4. **Responsive Check**: Verification across mobile (375px), tablet (768px), laptop (1024px), and wide desktop (1440px+) breakpoints.
5. **Lighthouse Benchmark**: Target minimum score of 95 in Performance, Accessibility, Best Practices, and SEO.

## Governance

- **Authority**: This Constitution supersedes all ad-hoc conventions or conflicting guidance for the `my-resume` repository.
- **Amendment Procedure**:
  - Proposed amendments MUST be documented with clear rationale and an impact assessment on existing templates and files.
  - Amendments MUST increment the Constitution version according to semantic versioning rules.
  - Dependent templates in `.specify/templates/` MUST be reviewed and validated against any amendments.
- **Versioning Policy**:
  - `MAJOR`: Fundamental architectural paradigm shifts (e.g., introducing a frontend framework or altering the core i18n architecture).
  - `MINOR`: Addition of new core principles, quality gates, or performance constraints.
  - `PATCH`: Wording clarifications, typo fixes, or non-semantic refinements.
- **Compliance Review**: All proposed feature specifications (`spec.md`), implementation plans (`plan.md`), and task lists (`tasks.md`) MUST verify compliance against this Constitution.

**Version**: 1.0.0 | **Ratified**: 2026-09-20 | **Last Amended**: 2026-09-20
