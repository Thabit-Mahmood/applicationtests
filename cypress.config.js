const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, junit',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    junitReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
      toConsole: true,
    },
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    videoUploadOnPasses: false,
  },
});