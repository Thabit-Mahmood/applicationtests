const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mochawesome",
    "reportFilename": "report",
    "quiet": true,
    "overwrite": false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
