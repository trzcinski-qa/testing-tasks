const { defineConfig } = require("cypress");
import { readPdf } from 'cypress/scripts/readPdf'

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('task', {
        readPdf
      })
    },
    trashAssetsBeforeRuns: false
  },
});
