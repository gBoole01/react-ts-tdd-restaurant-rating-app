describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Oshi Sushi'

    cy.visit('http://localhost:5173') // Go to Homepage
    cy.get('[data-testid="addRestaurantButton"]').should('exist') // Check that the Add Restaurant Button is shown
    cy.get('[data-testid="newRetaurantName"]').should('not.exist') // Check that the Input field not shown
    cy.get('[data-testid="addRestaurantButton"]').click() // Click on the Add Restaurant Button
    cy.get('[data-testid="newRetaurantName"]').type(restaurantName) // Enter a Restaurant name in the input
    cy.get('[data-testid="saveNewRestaurantButton"]').click() // Click on the Save Restaurant Button
    cy.get('[data-testid="newRetaurantName"]').should('not.exist') // Check that the Input field not shown

    cy.contains(restaurantName) // Expect the new Restaurant name is on the page
  })
})
