# Data Model: Service Offerings & Client Value Delivery

**Feature**: Service Offerings & Client Value Delivery Showcase  
**Feature Directory**: `specs/001-service-offerings`  
**Status**: Ready for Planning  

## Entities

### 1. Service Offering (`ServiceOffering`)

Represents a distinct, marketable consulting or engineering capability offered to prospective clients and companies.

| Field | Type | Description | Constraints |
|---|---|---|---|
| `id` | String | Unique identifier (e.g. `srv-modularization`) | Required, kebab-case |
| `badge_code` | String | Terminal-style category code (e.g. `// 01_MODULARIZATION`) | Required, monospace |
| `title_key` | String | Localization key for the service title | Required, maps to `translations` |
| `problem_key` | String | Localization key for the business challenge addressed | Required, maps to `translations` |
| `deliverables_keys` | Array<String> | Ordered list of localization keys for concrete deliverables | Required, 3-4 items |
| `ideal_for_key` | String | Localization key defining the target client/project fit | Required, maps to `translations` |
| `cta_label_key` | String | Localization key for the action button | Required, maps to `translations` |
| `cta_subject_key` | String | Localization key for prefilled communication subject | Required, URI-safe text |

#### Deliverables Sub-Entity (`DeliverableItem`)

| Field | Type | Description |
|---|---|---|
| `id` | String | Identifier within the service |
| `icon_class` | String | FontAwesome icon (e.g. `fas fa-cubes`, `fas fa-bolt`, `fas fa-microscope`) |
| `text_key` | String | Localization translation key |

---

### 2. Client Inquiry Action (`ClientInquiry`)

Represents the contextual action triggered when a prospective client initiates contact regarding a specific service.

| Field | Type | Description | Constraints |
|---|---|---|---|
| `service_id` | String | Reference to the `ServiceOffering.id` | Required |
| `service_title` | String | Human-readable title of the selected service | Required |
| `recipient_email` | String | Target destination email (`anglesson@outlook.com`) | Fixed constant |
| `subject_template` | String | Pre-formatted subject line | e.g. `[Service Inquiry] Architecture Modularization` |
| `body_template` | String | Structured message starter for the client | Multi-line greeting & prompts |
| `channel_type` | Enum | Communication channel (`mailto` or `clipboard_template`) | Required |

---

### 3. Re-Framed Case Study (`CaseStudy`)

Represents past engineering achievements re-framed as proof of deliverable value and return on investment.

| Field | Type | Description |
|---|---|---|
| `id` | String | Unique project slug (e.g. `proj-otp-modularization`) |
| `tag_key` | String | Category tag key (e.g. `// enterprise_architecture`) |
| `title_key` | String | Project / Case Study title key |
| `challenge_key` | String | Key describing the business/technical bottleneck |
| `solution_key` | String | Key describing the architectural intervention |
| `impact_key` | String | Key describing the measurable outcome / ROI |
| `stack_tags` | Array<String> | Technologies used (e.g. `["PHP", "DDD", "TDD", "Micro-Modules"]`) |

---

## State Transitions & Persistence

### Client Language Preference State
- **Storage**: Browser `localStorage` (`key: 'ang-portfolio-lang'`)
- **Possible Values**: `'en'` | `'pt'`
- **Default**: Stored value -> Browser `navigator.language` -> Fallback `'en'`
- **State Transition**:
  1. User clicks `#lang-toggle-btn`.
  2. Language cycles (`en` <-> `pt`).
  3. `localStorage.setItem('ang-portfolio-lang', newLang)` is committed.
  4. DOM is queried for all `[data-i18n]` nodes; text content is replaced with `translations[newLang][key]`.
  5. Mailto CTA links recalculate their URI-encoded subject and body templates to match the active language.
  6. Toast notification displays localized confirmation.

### Client Theme Selection State
- **Storage**: Browser `localStorage` (`key: 'ang-portfolio-theme'`)
- **Possible Values**: `'tokyo-night'`, `'cyber-tech'`, `'matrix'`, `'dracula'`, `'cyberpunk'`, etc.
- **State Transition**:
  1. User selects a theme in `#theme-dropdown`.
  2. `document.documentElement.setAttribute('data-theme', themeName)`.
  3. Contrast and colors adapt instantaneously via CSS variables with 0 layout shift.
