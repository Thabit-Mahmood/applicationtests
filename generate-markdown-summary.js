const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'cypress', 'reports', 'report.json');
const summaryPath = path.join(__dirname, 'cypress', 'reports', 'summary.md');

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const summary = [];
summary.push(`# Cypress Test Report\n`);
summary.push(`## Test Results\n`);
summary.push(`| Test Suite | Test Case | Status |\n`);
summary.push(`|------------|-----------|--------|\n`);

report.results.forEach((suite) => {
  suite.suites.forEach((subSuite) => {
    subSuite.tests.forEach((test) => {
      summary.push(`| ${suite.title} | ${test.title} | ${test.state} |\n`);
    });
  });
});

fs.writeFileSync(summaryPath, summary.join('\n'), 'utf8');