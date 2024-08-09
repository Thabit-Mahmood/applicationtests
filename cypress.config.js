const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',  // Use a config file for multiple reporters
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);  // Integrate mochawesome reporter
      return config;
    },
    videoUploadOnPasses: false,
  },
});
