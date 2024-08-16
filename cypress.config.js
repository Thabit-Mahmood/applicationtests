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
      // Load the Cypress Mochawesome Reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Load the Testomatio plugin
      require('@testomatio/reporter/lib/adapter/cypress-plugin')(on, config);
      
      
      return config;
    },
    videoUploadOnPasses: false,
  },
});