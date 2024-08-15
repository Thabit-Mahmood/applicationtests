describe('template spec', () => {
  it('test 1', () => {
    cy.visit('https://example.cypress.io')
  })
  it('test 2', () => {
    cy.visit('https://wrong-example.cypress.io')
  })
})