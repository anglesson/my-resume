# Implementation Plan: Service Offerings & Client Value Delivery Showcase

**Branch**: `001-service-offerings` | **Date**: 2026-09-20 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-service-offerings/spec.md`

## Summary

Transform the portfolio from a standard employment CV into a high-converting **Client Services & Value Delivery Showcase**. The implementation introduces a dedicated `#services` section post-Hero, updates primary navigation to `~/services`, establishes 4 distinct high-value engineering offerings (Monolith Modularization, Full-Stack Delivery, Performance Diagnostics & Audits, Architecture Advisory), wires contextual `mailto:` & clipboard inquiry triggers, reframes featured case studies around client ROI, and enforces 100% bilingual parity (EN / PT-BR) adhering to pure web standards.

## Technical Context

**Language/Version**: Semantic HTML5, modern CSS3 (Custom Properties, Grid, Flexbox), Vanilla JavaScript (ES6+)  
**Primary Dependencies**: Font Awesome 6.5.1 (CDN icons), zero client runtime frameworks / zero npm build tooling  
**Storage**: Client `localStorage` (`ang-portfolio-lang`, `data-theme`)  
**Testing**: Manual cross-browser validation, responsive viewport testing (320px to 1920px), Lighthouse audit (Performance, a11y, Best Practices, SEO), WCAG contrast checks  
**Target Platform**: Evergreen desktop & mobile browsers (Chrome, Safari, Firefox, Edge, iOS Safari, Android Chrome)  
**Project Type**: Single-page static portfolio with progressive enhancement  
**Performance Goals**: FCP <= 1.0s, LCP <= 1.5s, CLS <= 0.02, TBT = 0ms, Lighthouse score >= 95  
**Constraints**: Pure web standards (Vanilla-First), 100% bilingual parity via `scripts.js` translations dictionary, WCAG 2.1 AA compliance, Cyber-Tech / Omarchy design token adherence  
**Scale/Scope**: 1 static HTML file (`index.html`), stylesheet (`css/styles.css`), script controller (`js/scripts.js`)  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I: Vanilla-First & Zero Runtime Overhead**: PASS. Pure semantic HTML5, CSS custom properties, and vanilla JS. No external framework bundles or build chains introduced. Progressive enhancement preserves static content without JS.
- **Principle II: First-Class Internationalization & 100% Content Parity (EN / PT-BR)**: PASS. All new keys for titles, descriptions, deliverables, badges, and CTA labels are mapped in both `en` and `pt` dictionaries in `scripts.js` and bound via `data-i18n`.
- **Principle III: Universal Accessibility (a11y) & WCAG 2.1 AA Compliance**: PASS. Accessible markup, keyboard focus outlines, ARIA attributes on icon-only and dynamic triggers, >= 4.5:1 contrast across all themes, and reduced-motion support.
- **Principle IV: Cyber-Tech Design System & Multi-Theme Cohesion**: PASS. Layout uses existing CSS variables, card aesthetics, monospace badges, and theme transitions with zero CLS.
- **Principle V: Content Integrity & Verifiable Professional Narrative**: PASS. Service offerings and deliverables directly reflect real, verified achievements and senior qualifications.

*Post-Design Evaluation: All Constitution gates continue to pass without exceptions.*

## Project Structure

### Documentation (this feature)

```text
specs/001-service-offerings/
├── spec.md              # Feature specification
├── plan.md              # This implementation plan
├── research.md          # Architectural decisions & research
├── data-model.md        # Entities, deliverables, state transitions
├── quickstart.md        # Runnable validation scenarios
├── contracts/
│   ├── ui-contracts.md  # DOM & action trigger interface contracts
│   └── i18n-dictionary.json # Complete EN/PT-BR translation dictionary
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
index.html               # Add #services section, nav link, and reframed hero/case studies
css/
└── styles.css           # Add .services-grid, .service-card, responsive breakpoints, tokens
js/
└── scripts.js           # Add service translations to dictionary, wire inquiry triggers
```

**Structure Decision**: Single project static architecture matching the existing repository layout. No subdirectories or separate packages needed.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

*No violations. Clean adherence to all constitutional rules.*
