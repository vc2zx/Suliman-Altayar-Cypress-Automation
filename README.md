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

## Run Cypress

```bash
npx cypress open
```

In the Cypress UI, run an individual spec or use the `integration.cy.js` file for a website to run its grouped tests.

## Automation Coverage

The suite contains 14 unique Cypress tests across five primary spec files. Two integration runner specs group the existing tests by website.

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
│       │   ├── integration.cy.js
│       │   ├── navigation.cy.js
│       │   └── search-auth.cy.js
│       └── the-garage/
│           ├── integration.cy.js
│           ├── navigation.cy.js
│           └── programs.cy.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Production Safety

The assessment targets the Production environment.

The automated scenarios avoid destructive actions, unnecessary data creation, credential exposure, and form submissions that could affect Production data.

## Test Development and Verification

The initial Cypress automation suite was designed and implemented from manual exploration of both Production websites because Cypress execution from an external network was blocked by HTTP 403 responses.

After connecting to the Tuwaiq Academy network, the full suite could be executed against Production. The tests were then adjusted where necessary based on the actual execution behavior.

**Final result: 14 passed, 0 failed.**

## Network Execution Note

From an external network, both Production websites returned HTTP 403 responses before their application pages loaded.

When connected to the Tuwaiq Academy network, the same automation suite could access the sites and complete successfully.

No attempt was made to bypass Cloudflare or other Production security controls.
