# Research & Architectural Decisions: Service Offerings & Client Value Delivery

**Feature**: Service Offerings & Client Value Delivery Showcase  
**Feature Directory**: `specs/001-service-offerings`  
**Date**: 2026-09-20  

## Overview

This document establishes the technical and architectural decisions for pivoting the portfolio from an employment-focused CV into a high-converting **Client Services & Value Delivery Showcase**, while strictly upholding the Vanilla-First and pure web standards principles ratified in the project Constitution.

---

## Decision 1: Information Architecture & Section Hierarchy

### Context
The portfolio currently presents sections in typical resume order: About -> Projects -> Experience -> Stack -> Education. Prospective clients, founders, and hiring managers need to understand the marketable services and ROI immediately upon arrival.

### Decision
- Insert a dedicated `#services` section immediately following the Hero introduction and prior to `#projects`.
- Update the primary navigation header to include `~/services` (EN) / `~/servicos` (PT-BR) between `~/about` and `~/projects`.
- Reframe the Hero section to establish dual positioning: Senior Software Architect available for high-impact contracts, system modularization, and strategic technical consulting.

### Rationale
- Executive visitors typically decide whether to proceed within the first 5-10 seconds of scanning a landing page.
- Placing `#services` right below the value proposition ensures instant visibility of solutions and problem fit.
- Retaining `#projects` (case studies) and `#experience` (career log) right afterward provides immediate empirical proof and credibility to back up the services.

### Alternatives Considered
- *Replacing the CV sections entirely with an agency-style landing page*: Rejected because enterprise consulting clients, recruiters, and CTOs specifically look for verifiable career history, past enterprise employers (e.g. Gran, Rede Damas), and academic credentials (MBA in Software Architecture) to de-risk senior engagements.
- *Putting services inside a modal or separate HTML page*: Rejected to keep zero-latency single-page navigation and frictionless scrolling.

---

## Decision 2: Service Catalog Definition & Core Offerings

### Context
The portfolio must articulate concrete, high-value technical services aligned with Anglesson's proven senior background in PHP, JavaScript, Domain-Driven Design, TDD, and modular architectures.

### Decision
Establish four distinct client service offerings:
1. **Architecture & Monolith Modularization** (`// 01_MODULARIZATION`)
   - *Problem*: Brittle monoliths, tightly coupled logic, team deployment bottlenecks, regression risks.
   - *Deliverables*: Domain-Driven Design (DDD) bounded contexts, decoupled micro-modules, isolated contract boundaries, comprehensive TDD suite.
   - *Fit*: Growing scale-ups, fintechs, and mature SaaS platforms.
2. **Full-Stack Web Application Delivery** (`// 02_FULLSTACK`)
   - *Problem*: Need for robust, production-grade web systems delivered on schedule without technical debt.
   - *Deliverables*: High-throughput backend services (PHP/Laravel, Node.js), responsive frontends (React/Vue/Modern JS), clean REST/GraphQL APIs.
   - *Fit*: Startups launching MVPs or enterprises rolling out new customer portals.
3. **Performance Diagnostics, Database Tuning & Audits** (`// 03_PERFORMANCE`)
   - *Problem*: Slow SQL queries, unpredictable server response times, platform crashes during traffic spikes.
   - *Deliverables*: Deep code & database profiling, query indexing, caching strategy, zero-downtime reliability roadmap, test harness.
   - *Fit*: High-traffic web platforms, educational portals, e-commerce.
4. **Technical Advisory & Discovery Diagnostic** (`// 04_ADVISORY`)
   - *Problem*: Uncertainty in technical strategy, architectural dilemma, or team needs guidance on best practices.
   - *Deliverables*: Architecture blueprint, tech stack evaluation, 1-on-1 discovery session, roadmap report.
   - *Fit*: Non-technical founders, engineering squads, CTOs seeking second opinions.

### Rationale
These four offerings directly map to the verified achievements showcased in the career log (Order to Pay modularization, SIGECO high-traffic tuning, Executive BI dashboards).

---

## Decision 3: Inquiry & Conversion Funnel (Zero-Backend Implementation)

### Context
Inquiries must be low friction, immediate, and operational without spinning up an external database, CRM dependency, or paid third-party form handler.

### Decision
- **Contextual `mailto:` Trigger**: Each service card features a primary CTA button that generates a pre-formatted email link:
  `mailto:anglesson@outlook.com?subject=[Service%20Inquiry]%20{Service%20Title}&body=Hi%20Anglesson,%0A%0AI'm%20interested%20in%20discussing%20{Service%20Title}%20for%20our%20project.%0A%0AProject%20Overview:%0ATimeline:%0ABudget/Scope:%0A%0ABest%20regards,`
- **1-Click Copy Template**: An accessible secondary trigger allows clients who use webmail (Gmail/Outlook Web) or messaging apps to copy the structured inquiry text directly to their clipboard, accompanied by an instant Cyber-Tech toast confirmation.
- **Terminal Widget Quick-Action**: Enhance the interactive terminal widget with a quick command `services` or button to jump directly to the services catalog.

### Rationale
- Adheres 100% to Constitution Principle I (Vanilla-First & Zero Runtime Overhead).
- Functions offline and in restricted environments.
- Zero maintenance, zero monthly SaaS costs, zero privacy/data liability.

---

## Decision 4: i18n Translation Dictionary Schema & Bilingual Parity

### Context
Constitution Principle II strictly mandates 100% bilingual parity (English and Brazilian Portuguese). Every service, deliverable, and prompt must be translated without hardcoded strings in markup.

### Decision
- Extend the `translations` dictionary in [js/scripts.js](file:///Users/ang/Documents/my-resume/js/scripts.js) with structured keys:
  - `nav_services`
  - `services_tag`, `services_title`, `services_desc`
  - `srv1_tag`, `srv1_title`, `srv1_problem`, `srv1_d1`, `srv1_d2`, `srv1_d3`, `srv1_fit`, `srv1_cta`
  - `srv2_tag`, `srv2_title`, `srv2_problem`, `srv2_d1`, `srv2_d2`, `srv2_d3`, `srv2_fit`, `srv2_cta`
  - `srv3_tag`, `srv3_title`, `srv3_problem`, `srv3_d1`, `srv3_d2`, `srv3_d3`, `srv3_fit`, `srv3_cta`
  - `srv4_tag`, `srv4_title`, `srv4_problem`, `srv4_d1`, `srv4_d2`, `srv4_d3`, `srv4_fit`, `srv4_cta`
  - `toast_inquiry_copied`
- In [index.html](file:///Users/ang/Documents/my-resume/index.html), markup uses `data-i18n="<key>"` attributes with English text as default fallback content.

### Rationale
Guarantees zero missing keys, seamless runtime language switching, and persistence via `localStorage`.

---

## Decision 5: CSS Design System & Theme Integration

### Context
Constitution Principles III & IV mandate WCAG 2.1 AA accessibility and strict adherence to the Cyber-Tech / Omarchy terminal design system.

### Decision
- Implement `.services-section`, `.services-grid`, and `.service-card` in [css/styles.css](file:///Users/ang/Documents/my-resume/css/styles.css) utilizing existing design tokens:
  - Card background: `var(--card-bg)` with subtle border `var(--border)` and border-radius `var(--radius)`.
  - Hover effects: subtle ambient glow using `var(--primary-glow)`, transform `translateY(-4px)` with transition `var(--transition)`.
  - Responsive layout: CSS Grid with `repeat(auto-fit, minmax(320px, 1fr))` adapting smoothly down to 320px mobile viewports.
  - Reduced motion: `@media (prefers-reduced-motion: reduce)` disables card transitions and ambient animations.
  - Contrast: All text colors use `var(--text-main)` and `var(--text-muted)` which maintain >= 4.5:1 contrast across Tokyo Night, Matrix, Cyber-Tech, and all theme presets.

---

## Summary of Decisions

| Area | Decision | Constitution Gate |
|------|----------|-------------------|
| Architecture | Dedicated `#services` section placed post-Hero | Principle I & V (Vanilla & Narrative) |
| Offerings | 4 core services: Modularization, Full-Stack, Diagnostics, Advisory | Principle V (Integrity & Verifiable Proof) |
| Conversion | Pre-filled `mailto:` + 1-click clipboard inquiry | Principle I (Zero overhead & progressive fallback) |
| Localization | Full EN/PT-BR parity via `translations` dictionary | Principle II (100% Bilingual Parity) |
| Design & a11y | CSS Grid, tokenized variables, WCAG AA contrast, keyboard focus | Principle III & IV (a11y & Cyber-Tech System) |
