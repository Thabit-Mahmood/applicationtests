const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mocha-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/reports/reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
