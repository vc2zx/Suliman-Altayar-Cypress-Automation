# Tuwaiq QA Engineer Assessment - Cypress Automation

## Selected Websites

- The Garage — https://thegarage.sa
- Satr — https://satr.tuwaiq.edu.sa

## Prerequisites

- Node.js
- npm
- Google Chrome

Cypress 16.1.1 is installed as a project dependency.

## Installation

```bash
npm install
```

For a clean install using the included lockfile:

```bash
npm ci
```

## Run Cypress UI

```bash
npm run cy:open
```

## Run Headless

```bash
npm run cy:run
```

## Run with Chrome

```bash
npm run cy:run:chrome
```

## Automation Coverage

The suite contains 14 Cypress tests across five spec files.

- `the-garage/navigation.cy.js` — homepage, Contact Us navigation, and Arabic/English switching (3 tests).
- `the-garage/programs.cy.js` — program discovery, accelerator details, and registration destination without form submission (3 tests).
- `satr/navigation.cy.js` — homepage and educational content navigation (2 tests).
- `satr/courses.cy.js` — course listing, course details, and learning path details (3 tests).
- `satr/search-auth.cy.js` — search results, empty search results, and empty sign-in validation on Tuwaiq SSO (3 tests).

## Project Structure

```text
Assessment/
├── cypress/
│   └── e2e/
│       ├── satr/
│       │   ├── courses.cy.js
│       │   ├── navigation.cy.js
│       │   └── search-auth.cy.js
│       └── the-garage/
│           ├── navigation.cy.js
│           └── programs.cy.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Production Safety

The assessment targets the Production environment.

The automated scenarios avoid destructive actions, unnecessary data creation, credential exposure, and form submissions that could affect production data.

## Test Verification

All 14 Cypress scenarios were manually verified against the current Production UI using normal Chrome.

The selectors, navigation flows, URLs, visible content, and expected assertions matched the current websites during manual verification.

## Known Automation Limitation

During automated Cypress execution both selected production websites returned HTTP 403 responses before their application pages could load.

Direct command-line requests also returned HTTP 403 responses and identified Cloudflare as the responding server.

The websites remained accessible through normal interactive Chrome browsing.

Because of this production security restriction full Cypress execution could not be completed.
The Cypress scenarios were manually verified against the current Production UI instead.

No attempt was made to bypass Cloudflare or other production security controls.

The HTTP 403 response is treated as an automation environment limitation and not automatically as an application defect.