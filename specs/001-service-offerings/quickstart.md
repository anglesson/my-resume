# Quickstart & Validation Guide: Service Offerings

**Feature**: Service Offerings & Client Value Delivery Showcase  
**Feature Directory**: `specs/001-service-offerings`  
**Prerequisites**: Local web browser, static server (e.g. Python `http.server` or VS Code Live Server)  

---

## 1. Local Environment Launch

To serve the portfolio locally without external build tools:

```bash
# From repository root:
python3 -m http.server 8000
```

Open `http://localhost:8000` in any modern web browser (Chrome, Safari, Firefox, Edge).

---

## 2. Runnable Validation Scenarios

### Scenario 1: Services Section Discovery & Navigation
- **Action**: Navigate to `http://localhost:8000` and click `~/services` in the top navigation bar.
- **Expected Outcome**:
  - Smooth scroll to `#services`.
  - The section tag `// solutions & capabilities` is displayed.
  - 4 distinct service cards are visible in a responsive grid.
  - Each card shows: category badge, title, problem statement, 3 key deliverables with checkmarks, "Ideal For" badge, and inquiry CTA button.
- **Reference**: [ui-contracts.md](contracts/ui-contracts.md#2-services-section-dom-contract)

### Scenario 2: Bilingual Parity & Language Switching
- **Action**: Click the language switcher button (`#lang-toggle-btn`) in the header.
- **Expected Outcome**:
  - Navigation label switches from `~/services` to `~/servicos`.
  - All 4 service cards instantly update their titles, problem statements, and deliverables to Portuguese.
  - No untranslated English text remains in the `#services` section.
  - The language preference is saved in `localStorage['ang-portfolio-lang']`.
  - Reloading the page maintains the Portuguese content without flashing English text.
- **Reference**: [i18n-dictionary.json](contracts/i18n-dictionary.json)

### Scenario 3: Contextual Service Inquiry Trigger
- **Action**: Click the "Consult Service" / "Solicitar Diagnóstico" CTA on the *Architecture & Monolith Modularization* card.
- **Expected Outcome**:
  - The system launches the default email client with:
    - Recipient: `anglesson@outlook.com`
    - Subject: `[Service Inquiry] Architecture Modularization — anglesson.dev`
    - Body: Pre-filled structured template with Company/Challenge/Timeline prompts.
- **Reference**: [ui-contracts.md](contracts/ui-contracts.md#3-contextual-inquiry-action-contract)

### Scenario 4: Multi-Theme Contrast & Cyber-Tech Styling
- **Action**: Open the theme selector in the header and switch through themes: `Tokyo Night`, `Cyber-Tech`, `Matrix`.
- **Expected Outcome**:
  - Card background, border, badge colors, and hover glow adapt to the theme's CSS variables.
  - Text contrast remains sharp and fully legible (>= 4.5:1 ratio).
  - No visual flickering or layout shifting (CLS <= 0.02).

### Scenario 5: Accessibility & Keyboard Navigation
- **Action**: Use the `Tab` key on the keyboard to navigate through the entire page from the header down to the `#services` section.
- **Expected Outcome**:
  - Visible focus indicator rings highlight every link and CTA button.
  - Screen readers announce the contextual `aria-label` for each service CTA.
  - Touching or clicking buttons on a simulated mobile viewport (375px) satisfies minimum 44x44px touch targets.

### Scenario 6: Progressive Fallback (No-JS Test)
- **Action**: Disable JavaScript in browser developer tools and refresh the page.
- **Expected Outcome**:
  - The `#services` section remains fully visible, styled, and legible.
  - Direct `mailto:` links on each service card still function properly.
