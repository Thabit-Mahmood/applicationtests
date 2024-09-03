describe('User9 Test', () => {
  it('visits example.cypress.io', () => {
    cy.visit('https://www.youtube.com/');
  });
  after(() => {
    const specName = Cypress.spec.name;
    const results = {
      totalTests: Cypress.mocha.getRunner().suite.tests.length,
      numPassedTests: Cypress.mocha.getRunner().stats.passes,
      numFailedTests: Cypress.mocha.getRunner().stats.failures,
      numPendingTests: Cypress.mocha.getRunner().stats.pending,
    };
  
    cy.saveResults(specName, results);
  });
  
});