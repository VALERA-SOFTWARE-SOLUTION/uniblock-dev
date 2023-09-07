const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dashboard-test.uniblock.dev",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
