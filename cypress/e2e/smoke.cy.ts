describe('Smoke Test', () => {
  it('Makes sure the welcome message comes up!', () => {
    cy.visit('http://localhost:5173').contains('Restaurant Rating')
  })
})
