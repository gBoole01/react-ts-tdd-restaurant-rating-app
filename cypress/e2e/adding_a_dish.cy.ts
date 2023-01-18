describe('adding a dish', () => {
  function addRestaurant(restaurantName: string) {
    cy.get('[data-testid="addRestaurantButton"]').click()
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName)
    cy.get('[data-testid="saveNewRestaurantButton"]').click()
  }

  function shownElementsArePresentAtTheStart() {
    cy.get('[data-testid="addDishButton"]').should('exist')
  }

  function hiddenElementsAreNotPresentAtTheStart() {
    cy.get('[data-testid="newDishName"]').should('not.exist')
  }

  function modalCanBeCancelled() {
    cy.get('[data-testid="addDishButton"]').click()
    cy.get('[data-testid="closeNewDishModalButton"]').click()
    cy.get('[data-testid="newDishName"]').should('not.exist')
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-testid="addDishButton"]').click()
    cy.get('[data-testid="saveNewDishButton"]').click()
    cy.get('[data-testid="newDishNameError"]').contains('Cannot be blank')
    cy.get('[data-testid="closeNewDishModalButton"]').click()
  }

  function addDish(dishName: string) {
    cy.get('[data-testid="addDishButton"]').click()
    cy.get('[data-testid="newDishName"]').type(dishName)
    cy.get('[data-testid="saveNewDishButton"]').click()
    cy.get('[data-testid="newDishName"]').should('not.exist')
    cy.contains(dishName)
  }

  it('displays the dish in the list', () => {
    const restaurantName = 'Oshi Sushi'
    const dishName = 'Menu E - "Duo"'

    cy.visit('http://localhost:4173')

    addRestaurant(restaurantName)

    shownElementsArePresentAtTheStart()
    hiddenElementsAreNotPresentAtTheStart()
    modalCanBeCancelled()
    modalDisplaysValidationErrors()

    addDish(dishName)
  })
})
