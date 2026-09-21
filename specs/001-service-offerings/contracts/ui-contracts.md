# UI & Interface Contracts: Service Offerings

**Feature**: Service Offerings & Client Value Delivery Showcase  
**Feature Directory**: `specs/001-service-offerings`  
**Status**: Ready for Planning  

---

## 1. Navigation Contract

The primary navigation menu in [index.html](file:///Users/ang/Documents/my-resume/index.html) must include `~/services` with the following structure:

```html
<nav>
  <ul class="nav-menu" id="nav-menu">
    <li><a class="nav-link" href="#about" data-i18n="nav_about">~/about</a></li>
    <li><a class="nav-link" href="#services" data-i18n="nav_services">~/services</a></li>
    <li><a class="nav-link" href="#projects" data-i18n="nav_projects">~/projects</a></li>
    <li><a class="nav-link" href="#experience" data-i18n="nav_experience">~/experience</a></li>
    <li><a class="nav-link" href="#skills" data-i18n="nav_skills">~/stack</a></li>
    <li><a class="nav-link" href="#education" data-i18n="nav_education">~/education</a></li>
  </ul>
</nav>
```

---

## 2. Services Section DOM Contract

The `#services` section adheres to this semantic HTML contract:

```html
<section id="services" class="resume-section services-section">
  <div class="container">
    <div class="section-tag" data-i18n="services_tag">// solutions & capabilities</div>
    <h2 class="section-title" data-i18n="services_title">Services & Architecture Solutions</h2>
    <p class="section-desc" data-i18n="services_desc">
      Engineering services tailored for high-growth tech companies, scale-ups, and corporate platforms.
    </p>

    <div class="services-grid">
      <!-- Service Card 1: Architecture & Modularization -->
      <article class="service-card cyber-card" data-service-id="srv-modularization">
        <div class="service-card-header">
          <span class="service-badge" data-i18n="srv1_tag">// 01_ARCHITECTURE</span>
          <i class="fas fa-cubes service-icon" aria-hidden="true"></i>
        </div>
        <h3 class="service-title" data-i18n="srv1_title">Architecture & Monolith Modularization</h3>
        <p class="service-problem" data-i18n="srv1_problem">
          Decouple complex legacy codebases into high-velocity, testable domains using DDD.
        </p>
        <div class="service-deliverables">
          <h4 class="deliverables-heading" data-i18n="services_deliverables_label">Key Deliverables:</h4>
          <ul>
            <li><i class="fas fa-check-circle"></i> <span data-i18n="srv1_d1">Bounded contexts & domain modeling (DDD)</span></li>
            <li><i class="fas fa-check-circle"></i> <span data-i18n="srv1_d2">Isolated micro-modules & clean APIs</span></li>
            <li><i class="fas fa-check-circle"></i> <span data-i18n="srv1_d3">Zero-regression automated test suite (TDD)</span></li>
          </ul>
        </div>
        <div class="service-fit">
          <span class="fit-label" data-i18n="services_fit_label">Ideal For:</span>
          <span class="fit-value" data-i18n="srv1_fit">Growing SaaS platforms & fintechs</span>
        </div>
        <div class="service-card-footer">
          <a href="mailto:anglesson@outlook.com?subject=%5BService%20Inquiry%5D%20Architecture%20Modularization"
             class="btn-cyber btn-service-cta"
             data-service-cta="srv-modularization"
             data-i18n="srv1_cta"
             aria-label="Inquire about Architecture & Monolith Modularization service">
            <i class="fas fa-envelope-open-text"></i>
            <span>Consult Service</span>
          </a>
        </div>
      </article>

      <!-- Repeat for srv2, srv3, srv4 -->
    </div>
  </div>
</section>
```

---

## 3. Contextual Inquiry Action Contract

### Mailto URL Specification
- **Base Endpoint**: `mailto:anglesson@outlook.com`
- **Subject Parameter**: `?subject=[Service Inquiry] <Service Title> — anglesson.dev`
- **Body Template Parameter (URI-encoded)**:
```text
Hi Anglesson,

I would like to discuss the following service: <Service Title>

Company / Project:
Current Challenge / Goal:
Estimated Timeline:

Best regards,
```

### Clipboard Action Contract
When the user clicks the quick copy action for a service inquiry, the application must:
1. Write the structured email template to `navigator.clipboard`.
2. Display a localized toast notification:
   - English: `Inquiry template for [<Service Title>] copied to clipboard!`
   - Portuguese: `Modelo de contato para [<Service Title>] copiado para a área de transferência!`
3. Return focus to the originating button for keyboard accessibility.
