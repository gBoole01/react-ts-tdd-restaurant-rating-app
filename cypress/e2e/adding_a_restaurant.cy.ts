function shownElementsArePresentAtTheStart() {
  cy.get('[data-testid="addRestaurantButton"]').should('exist')
}

function hiddenElementsAreNotPresentAtTheStart() {
  cy.get('[data-testid="newRetaurantName"]').should('not.exist')
}

function modalCanBeCancelled() {
  cy.get('[data-testid="addRestaurantButton"]').click()
  cy.get('[data-testid="closeNewRestaurantModalButton"]').click()
  cy.get('[data-testid="newRetaurantName"]').should('not.exist')
}

function modalDisplaysValidationErrors() {
  cy.get('[data-testid="addRestaurantButton"]').click()
  cy.get('[data-testid="saveNewRestaurantButton"]').click()
  cy.get('[data-testid="newRetaurantNameError"]').contains('Cannot be blank')
  cy.get('[data-testid="closeNewRestaurantModalButton"]').click()
}

function modalAllowsAddingARestaurant(restaurantName: string) {
  cy.get('[data-testid="addRestaurantButton"]').click()
  cy.get('[data-testid="newRetaurantName"]').type(restaurantName)
  cy.get('[data-testid="saveNewRestaurantButton"]').click()
  cy.get('[data-testid="newRetaurantName"]').should('not.exist')
  cy.contains(restaurantName)
}

describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Oshi Sushi'

    cy.visit('http://localhost:4173')

    shownElementsArePresentAtTheStart()
    hiddenElementsAreNotPresentAtTheStart()
    modalCanBeCancelled()
    modalDisplaysValidationErrors()
    modalAllowsAddingARestaurant(restaurantName)
  })
})
