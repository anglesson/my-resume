---
description: "Task list for Service Offerings & Client Value Delivery Showcase implementation"
---

# Tasks: Service Offerings & Client Value Delivery Showcase

**Input**: Design documents from `specs/001-service-offerings/`  
**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/](contracts/)  

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story identifier (US1, US2, US3, US4)
- File paths are explicitly specified

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Validate repository setup and environment configuration

- [x] T001 Verify git status and ensure `.gitignore` covers OS and editor artifacts in `.gitignore`
- [x] T002 Inspect existing CSS variables and structure in `css/styles.css` for services grid integration

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core localization data and CSS foundation required by all user stories

- [x] T003 Expand `translations` dictionary in `js/scripts.js` with all keys from `specs/001-service-offerings/contracts/i18n-dictionary.json` (for EN and PT)
- [x] T004 Add CSS styles for `.services-section`, `.services-grid`, `.service-card`, `.service-badge`, `.service-deliverables`, and `.btn-service-cta` in `css/styles.css`

---

## Phase 3: User Story 1 - Discover Service Offerings & Solutions (Priority: P1)

**Goal**: Visitors can discover 4 distinct high-value engineering services in a dedicated `#services` section post-Hero with 100% bilingual parity.  
**Independent Test**: Load page, click `~/services` in navigation, inspect 4 service cards with problem statements, deliverables, and fit tags. Toggle EN/PT to verify instant translation.

- [x] T005 [US1] Add `~/services` (`data-i18n="nav_services"`) to primary navigation `<header>` in `index.html`
- [x] T006 [US1] Refactor Hero value proposition and subtitle in `index.html` and `js/scripts.js` to highlight Senior Architect & Consulting capability
- [x] T007 [US1] Implement semantic `<section id="services">` in `index.html` with 4 service cards per `contracts/ui-contracts.md`
- [x] T008 [US1] Verify responsive grid behavior down to 320px mobile viewport in `css/styles.css`

---

## Phase 4: User Story 2 - Contextual Service Inquiry & Direct Engagement (Priority: P1)

**Goal**: Low-friction inquiry action on each service card with pre-filled service context and 1-click clipboard option.  
**Independent Test**: Click CTA on any service card; verify `mailto:` opens with correct service subject or clipboard copy triggers localized Cyber-Tech toast.

- [x] T009 [US2] Wire contextual `mailto:` links with pre-encoded service inquiry subjects and bodies on all service cards in `index.html`
- [x] T010 [US2] Add quick-copy template handler and localized toast notification in `js/scripts.js` for service inquiries
- [x] T011 [US2] Enhance interactive terminal widget in `index.html` and `js/scripts.js` with quick service inquiry prompt

---

## Phase 5: User Story 3 - Value-Driven Proof of Delivery / Case Studies (Priority: P2)

**Goal**: Reframe featured projects around client ROI, business bottlenecks, and architectural solutions.  
**Independent Test**: Inspect `#projects` section; verify OTP modularization, SIGECO stabilization, and Executive BI emphasize problem-solution-impact.

- [x] T012 [US3] Reframe project descriptions in `index.html` and `js/scripts.js` to highlight business challenges, architectural solutions, and ROI
- [x] T013 [US3] Add capability badges (`DDD`, `TDD`, `Micro-Modules`, `High-Traffic Optimization`) to project cards in `index.html` and `css/styles.css`

---

## Phase 6: User Story 4 - Background Credibility & Enterprise Experience (Priority: P3)

**Goal**: Align career log and education sections to serve as institutional proof for the services offered.  
**Independent Test**: Inspect `#experience` and `#education`; verify narrative clearly supports consulting capabilities.

- [x] T014 [US4] Update career section intro and tagline in `index.html` and `js/scripts.js` to contextualize enterprise experience as proof of delivery capability
- [x] T015 [US4] Highlight MBA in Software Architecture and enterprise scale metrics in `index.html`

---

## Phase 7: Polish & Quality Gates

**Purpose**: Cross-cutting quality checks and compliance verification

- [x] T016 Verify WCAG 2.1 AA contrast ratios across all themes (Tokyo Night, Cyber-Tech, Matrix, Dracula) in `css/styles.css`
- [x] T017 Test keyboard accessibility (`Tab`, `Enter`, `Escape`) and screen reader `aria-label` attributes on all interactive controls in `index.html`
- [x] T018 Verify zero-JS fallback ensuring all service copy and `mailto:` links are 100% accessible without JavaScript
- [x] T019 Execute end-to-end scenarios from `specs/001-service-offerings/quickstart.md`
