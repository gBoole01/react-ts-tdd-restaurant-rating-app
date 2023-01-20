describe('adding a restaurant', () => {
  function shownElementsArePresentAtTheStart() {
    cy.get('[data-testid="addRestaurantButton"]').should('exist')
  }

  function hiddenElementsAreNotPresentAtTheStart() {
    cy.get('[data-testid="newRestaurantName"]').should('not.exist')
  }

  function modalCanBeCancelled() {
    cy.get('[data-testid="addRestaurantButton"]').click()
    cy.get('[data-testid="closeNewRestaurantModalButton"]').click()
    cy.get('[data-testid="newRestaurantName"]').should('not.exist')
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-testid="addRestaurantButton"]').click()
    cy.get('[data-testid="saveNewRestaurantButton"]').click()
    cy.get('[data-testid="newRestaurantNameError"]').contains('Cannot be blank')
    cy.get('[data-testid="closeNewRestaurantModalButton"]').click()
  }

  function addRestaurant(restaurantName: string) {
    cy.get('[data-testid="addRestaurantButton"]').click()
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName)
    cy.get('[data-testid="saveNewRestaurantButton"]').click()
    cy.get('[data-testid="newRestaurantName"]').should('not.exist')
  }

  function modalAllowsAddingRestaurant(restaurantName: string) {
    addRestaurant(restaurantName)
    cy.contains(restaurantName)
  }

  it('displays the restaurant in the list', () => {
    const restaurantName = 'Oshi Sushi'

    cy.visit('http://localhost:4173')

    shownElementsArePresentAtTheStart()
    hiddenElementsAreNotPresentAtTheStart()
    modalCanBeCancelled()
    modalDisplaysValidationErrors()
    modalAllowsAddingRestaurant(restaurantName)
  })
})
