const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    videoUploadOnPasses: false,
  },
});
