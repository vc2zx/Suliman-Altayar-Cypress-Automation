const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,
  },

  expose: {
    garageUrl: "https://thegarage.sa",
    satrUrl: "https://satr.tuwaiq.edu.sa",
  },
});
