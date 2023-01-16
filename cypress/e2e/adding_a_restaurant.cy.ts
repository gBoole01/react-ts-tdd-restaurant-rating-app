describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Oshi Sushi'

    cy.visit('http://localhost:5173') // Go to Homepage
    cy.get('[data-test="addRestaurantButton"]').click() // Click on the Add Restaurant Button
    cy.get('[data-test="newRetaurantName"]').type(restaurantName) // Enter a Restaurant name in the input
    cy.get('[data-test="saveNewRestaurantButton"]').click() // Click on the Save Restaurant Button

    cy.contains(restaurantName) // Expect the new Restaurant name is on the page
  })
})
