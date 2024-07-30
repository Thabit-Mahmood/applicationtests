const fs = require('fs');
const path = require('path');

const reportDir = 'cypress/reports';
const summaryFile = path.join(reportDir, 'summary.txt');

function generateSummary() {
  const reportFiles = fs.readdirSync(reportDir).filter(file => file.endsWith('.json'));

  let summary = '';
  reportFiles.forEach(file => {
    const report = JSON.parse(fs.readFileSync(path.join(reportDir, file)));
    report.results.forEach(result => {
      const suiteName = result.suites[0].title;
      const testCount = result.tests.length;
      const passedCount = result.tests.filter(test => test.state === 'passed').length;
      const failedCount = result.tests.filter(test => test.state === 'failed').length;
      const duration = result.stats.duration;
      summary += `${suiteName} — ${passedCount} tests passed, ${failedCount} tests failed in ${duration}ms\n`;
    });
  });

  fs.writeFileSync(summaryFile, summary);
  console.log('Summary generated:');
  console.log(summary);
}

generateSummary();
