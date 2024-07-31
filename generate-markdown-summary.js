const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'cypress', 'reports', '.jsons', 'mochawesome.json');
const summaryPath = path.join(__dirname, 'markdown-summary.md');

if (!fs.existsSync(reportPath)) {
  console.error('Report JSON file not found.');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

let markdownSummary = `# Cypress Test Report\n\n`;
markdownSummary += `## Summary\n`;
markdownSummary += `- **Total Tests:** ${report.stats.tests}\n`;
markdownSummary += `- **Passed Tests:** ${report.stats.passes}\n`;
markdownSummary += `- **Failed Tests:** ${report.stats.failures}\n`;
markdownSummary += `- **Duration:** ${report.stats.duration} ms\n\n`;

markdownSummary += `## Details\n\n`;
report.results.forEach((suite) => {
  markdownSummary += `### ${suite.title}\n\n`;
  suite.suites.forEach((subSuite) => {
    markdownSummary += `#### ${subSuite.title}\n\n`;
    subSuite.tests.forEach((test) => {
      markdownSummary += `- **Test:** ${test.title}\n`;
      markdownSummary += `  - **Status:** ${test.state}\n`;
      if (test.state === 'failed') {
        const screenshotPath = `cypress/screenshots/${test.title.replace(/\s+/g, '_')}.png`;
        markdownSummary += `  - **Screenshot:** ![${test.title}](${screenshotPath})\n`;
      }
      markdownSummary += `  - **Duration:** ${test.duration} ms\n\n`;
    });
  });
});

fs.writeFileSync(summaryPath, markdownSummary);
console.log('Markdown summary generated successfully.');
