# Uniblock

Live product: https://www.uniblock.dev/

## Setup

1. Clone the repository.
2. In the repository's director, run `npm install`.
3. Copy the `cypress.env.copy.json` file and rename it `cypress.env.json`.
4. Add your own local env variables to `cypress.env.json`, not in `cypress.env.copy.json`. Please take note that these local variables will not be pushed to git.

## Running Tests Locally

You can run tests locally via the CLI or the Cypress GUI.

- Run `npm run run:chrome` to run tests via the CLI in a headless chrome browser.
- Run `npm run open:chrome` to run tests in the Cypress GUI with a chrome browser.
- Run `npm run run:edge` to run tests via the CLI in a headless edge browser.
- Run `npm run open:edge` to run tests in the Cypress GUI with a edge browser.
