describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Oshi Sushi'

    // Go to Homepage
    cy.visit('http://localhost:4173')

    // Check that the Add Restaurant Button is shown
    cy.get('[data-testid="addRestaurantButton"]').should('exist')

    // Check that the Input field not shown
    cy.get('[data-testid="newRetaurantName"]').should('not.exist')

    // Click on the Add Restaurant Button
    cy.get('[data-testid="addRestaurantButton"]').click()

    // Click on the Cancel Add Restaurant Button
    cy.get('[data-testid="closeNewRestaurantModalButton"]').click()

    // Check that the Input field not shown
    cy.get('[data-testid="newRetaurantName"]').should('not.exist')

    // Click on the Add Restaurant Button
    cy.get('[data-testid="addRestaurantButton"]').click()

    // Enter a Restaurant name in the input
    cy.get('[data-testid="newRetaurantName"]').type(restaurantName)

    // Click on the Save Restaurant Button
    cy.get('[data-testid="saveNewRestaurantButton"]').click()

    // Check that the Input field not shown
    cy.get('[data-testid="newRetaurantName"]').should('not.exist')

    // Expect the new Restaurant name is on the page
    cy.contains(restaurantName)
  })
})
