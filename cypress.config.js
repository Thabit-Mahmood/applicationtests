const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // Load the Testomatio plugin
      
      // Load the Cypress Mochawesome Reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      
      return config;
    },
    videoUploadOnPasses: false,
  },
});