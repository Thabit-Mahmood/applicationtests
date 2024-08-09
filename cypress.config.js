const { defineConfig } = require('cypress')

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
      require('cypress-mochawesome-reporter/plugin')(on);

      // Add JUnit reporter
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // if the video has failed tests, delete it
          if (results.stats.failures === 0) {
            fs.unlinkSync(results.video);
          }
        }
      });

      return config;
    },
    videoUploadOnPasses: false,
  },
});