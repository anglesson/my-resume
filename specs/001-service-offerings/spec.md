# Feature Specification: Service Offerings & Client Value Delivery Showcase

**Feature Branch**: `001-service-offerings`

**Created**: 2026-09-20

**Status**: Ready for Planning

**Input**: User description: "Quero que este portifólio seja focado no que eu posso entregar/vender como serviço para quem precisa."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Service Offerings & Solutions (Priority: P1)

A business founder, CTO, or tech leader visits the portfolio looking for a senior software specialist to solve an engineering bottleneck or deliver a mission-critical project. They can immediately find a dedicated "Services & Solutions" catalog that clearly states what problems can be solved, what deliverables are produced, and how the engagement works.

**Why this priority**: This transforms the portfolio from a passive resume/CV into an active client service portal, directly answering what value can be hired and delivered.

**Independent Test**: Can be fully tested by loading the site, viewing the primary navigation, jumping to `~/services`, and verifying that distinct service cards display clear problem definitions, deliverables, and target client profiles.

**Acceptance Scenarios**:

1. **Given** a prospective client loads the portfolio, **When** they view the navigation and hero section, **Then** they see a clear value proposition focused on client delivery and a direct navigation link `~/services`.
2. **Given** a visitor navigates to the services section, **When** they browse the offerings, **Then** they see at least 4 distinct service categories detailing the business challenge, the concrete deliverable, and the ideal project fit.
3. **Given** a visitor toggles language between English and Portuguese, **When** viewing the services section, **Then** all service titles, problem statements, and deliverables switch seamlessly with 100% content parity.

---

### User Story 2 - Contextual Service Inquiry & Direct Engagement (Priority: P1)

A prospective client identifies a service that matches their current engineering challenge (e.g., "Architecture Modularization & Decoupling") and wants to immediately initiate a project discussion or request a consultation without generic, friction-heavy contact forms.

**Why this priority**: A services catalog is ineffective without a clear, immediate conversion path tailored to the specific service of interest.

**Independent Test**: Can be fully tested by clicking the "Inquire About This Service" or "Request Consultation" trigger on any service card and verifying that the engagement channel opens with pre-populated context.

**Acceptance Scenarios**:

1. **Given** a client is reviewing a specific service card, **When** they click "Inquire About This Service", **Then** an inquiry action is triggered with the service name automatically set in the subject line/message template.
2. **Given** a client prefers 1-click clipboard copying, **When** they copy contact information from the service prompt, **Then** a localized confirmation toast confirms the copy action and provides estimated response turnaround.
3. **Given** a user is navigating via keyboard alone, **When** tabbing through service action buttons, **Then** each button displays an accessible focus ring and descriptive screen-reader announcement.

---

### User Story 3 - Value-Driven Proof of Delivery / Case Studies (Priority: P2)

A client assessing technical risk wants to verify that the proposed services have been successfully executed in real-world environments with measurable return on investment.

**Why this priority**: High-value technical services require tangible proof of delivery and architectural credibility to convert corporate decision-makers.

**Independent Test**: Can be fully tested by reviewing the project showcase section, verifying that projects are framed as problem-solution-impact case studies rather than simple task lists.

**Acceptance Scenarios**:

1. **Given** a client explores past work, **When** inspecting featured case studies (e.g., Order to Pay modularization, high-traffic educational platform stabilization), **Then** each item highlights the business challenge, the architectural intervention, and the tangible operational outcome.
2. **Given** a client reviews the technologies utilized, **When** looking at the skill ecosystem, **Then** technical capabilities are grouped by how they support service delivery (Backend & Architecture, Frontend & UX, Reliability & DevOps).

---

### User Story 4 - Background Credibility & Enterprise Experience (Priority: P3)

A prospective corporate client or agency conducting vendor due diligence wants to verify the professional history, postgraduate qualifications (MBA in Software Architecture), and long-term track record of the service provider.

**Why this priority**: Enterprise clients and international partners require verification that the consultant has proven track record in sustained production environments.

**Independent Test**: Can be fully tested by reviewing the career log and credentials sections, confirming they reinforce the services offered without confusing the user about whether the site is for services or general employment.

**Acceptance Scenarios**:

1. **Given** a client seeks formal credentials, **When** viewing the career and education timeline, **Then** the timeline demonstrates 10+ years of software engineering leadership, enterprise scale, and postgraduate education supporting the offered services.

---

### Edge Cases

- **JavaScript Disabled / Constrained Environment**: If client scripts are disabled or fail to load, all service descriptions, deliverables, and mailto inquiry links MUST remain 100% visible and functional via clean semantic HTML.
- **Client Uncertain of Precise Technical Needs**: If a visitor knows their system is slow or failing but does not know which technical service to choose, the services section MUST feature a general "Architecture Diagnostic / Discovery Call" offering to guide them.
- **Narrow Mobile Viewports (<= 360px)**: Service cards MUST stack vertically with comfortable reading margins and touch-friendly action targets (>= 44x44px), avoiding clipped badges or overflowing text.
- **Language Persistence on Deep Links**: If a client receives a direct anchor link to `~/services`, the site MUST respect any stored language preference and render immediately in that language without layout flashes.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST feature a prominent "Services & Solutions" catalog section (`#services`) positioned before or alongside career highlights.
- **FR-002**: System MUST define and present at least four distinct, client-ready service offerings:
  1. *Architecture & Monolith Modularization*: Decoupling monolithic legacy systems into maintainable modules/microservices using Domain-Driven Design (DDD) and clean boundaries.
  2. *Full-Stack Web Application Delivery*: End-to-end development of high-performance web applications, robust REST/GraphQL APIs, and responsive frontends.
  3. *Performance Diagnostics, Database Tuning & Code Auditing*: Diagnosing system bottlenecks, query optimization, zero-downtime stability, and automated test coverage (TDD).
  4. *Technical Architecture Advisory & Discovery*: Strategic technical consulting for founders, CTOs, and engineering squads on system design, tech stack selection, and scalability.
- **FR-003**: Each service card MUST explicitly present:
  - Service Title and Monospace Badge (Cyber-Tech taxonomy).
  - Target Business Problem / Pain Point.
  - Concrete Deliverables (e.g., modular architecture, API specifications, audit report, production code).
  - Target Audience / Ideal Project Stage.
  - Dedicated contextual inquiry action button.
- **FR-004**: System MUST update the Hero / Value Proposition section to immediately communicate the dual capability: Senior Software Architect available for high-impact consulting, system delivery, and specialized technical contracts.
- **FR-005**: System MUST provide 100% bilingual parity (English and Brazilian Portuguese) for all service titles, descriptions, deliverables, and inquiry prompts via the existing localization engine.
- **FR-006**: System MUST update primary navigation menu to include the new `~/services` endpoint, properly indexed in both EN (`~/services`) and PT-BR (`~/servicos`).
- **FR-007**: System MUST provide contextual Call-to-Action (CTA) triggers on each service card that launch an inquiry with pre-filled service context.
- **FR-008**: System MUST adapt the project showcase to emphasize business impact, deliverables, and return on investment (ROI).
- **FR-009**: System MUST preserve existing career history (`~/experience`) and education (`~/education`) as supporting evidence of expertise, framed as proof of institutional capability.
- **FR-010**: All service offerings, badges, and interactive controls MUST satisfy WCAG 2.1 AA accessibility guidelines, including contrast ratios and keyboard navigation.

### Key Entities

- **Service Offering**: Represents a distinct marketable service package. Attributes: `id`, `slug`, `title`, `badge`, `problem_statement`, `deliverables` (list), `ideal_for`, `cta_label`, `cta_subject`.
- **Case Study**: Represents an empirical demonstration of past delivery. Attributes: `id`, `title`, `client_type`, `challenge`, `architectural_solution`, `measurable_impact`.
- **Client Inquiry Trigger**: Represents the user action to initiate a business contact. Attributes: `target_service_id`, `prefilled_subject`, `contact_channel`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify what services are available for hire within 5 seconds of scanning the homepage.
- **SC-002**: 100% of all service titles, descriptions, deliverables, and action prompts have full bilingual parity in both English (`en`) and Brazilian Portuguese (`pt-br`).
- **SC-003**: Prospective clients can trigger a targeted service inquiry in no more than 2 clicks from any service card.
- **SC-004**: All newly added elements achieve a 100% pass rate in automated accessibility checks (WCAG 2.1 AA compliance) with 0 contrast or landmark violations.
- **SC-005**: Page load speed and performance metrics maintain zero regressions (LCP <= 1.5s, CLS <= 0.02, TBT = 0ms).
- **SC-006**: 100% of core service content is readable and contact links remain operational when JavaScript execution is completely disabled.

## Assumptions

- Direct client inquiries will be initiated through streamlined direct channels (pre-filled `mailto:` links with structured subjects, clipboard email copying, and direct message links), avoiding the need for a complex third-party backend database.
- The portfolio continues to cater to both international clients (requiring English) and Brazilian companies/startups (requiring Portuguese).
- Existing employment history at GRAN and Rede Damas remains valuable as credibility proof and will be preserved under an updated contextual framing.
- The aesthetic continues to adhere strictly to the ratified Constitution (Cyber-Tech / Omarchy theme, CSS custom properties, zero external framework runtime bloat).
