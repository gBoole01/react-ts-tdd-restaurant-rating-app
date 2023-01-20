describe('adding a dish', () => {
  function addRestaurant(restaurantName: string) {
    cy.get('[data-testid="addRestaurantButton"]').click()
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName)
    cy.get('[data-testid="saveNewRestaurantButton"]').click()
  }

  function goToRestaurantPage(restaurantName: string) {
    cy.contains(restaurantName).click()
  }

  function shownElementsArePresentAtTheStart(restaurantName: string) {
    cy.get('[data-testid="addDishButton"]').should('exist')
    cy.get('[data-testid="headingRestaurantName"]').contains(restaurantName)
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
  }

  function modalAllowsAddingDish(dishName: string) {
    addDish(dishName)
    cy.contains(dishName)
  }

  function backButtonAllowsGoingToPreviousPage(restaurantName: string) {
    cy.get('[data-testid="backButton"]').click()
    cy.contains(restaurantName).click()
  }

  function dishesPersistedWhenLeavingThePage(
    restaurantName: string,
    dishName: string,
  ) {
    addDish(dishName)
    cy.get('[data-testid="backButton"]').click()
    cy.contains(restaurantName).click()
    cy.contains(dishName)
  }

  function dishesStoredPerRestaurant(
    originRestaurantName: string,
    restaurantName: string,
    absentDishName: string,
    dishName: string,
  ) {
    addDish(absentDishName)
    cy.get('[data-testid="backButton"]').click()
    addRestaurant(restaurantName)
    goToRestaurantPage(restaurantName)
    cy.contains(absentDishName).should('not.exist')
    addDish(dishName)
    cy.get('[data-testid="backButton"]').click()
    cy.contains(originRestaurantName).click()
    cy.contains(dishName)
  }

  it('displays the dish in the list', () => {
    const restaurantNames = ['Oshi Sushi', 'Kokomo Burger']
    const dishNames = [
      'Menu E - "Duo"',
      'Gyozas *5',
      'California Saumon',
      'Loaded Fries',
    ]

    cy.visit('http://localhost:4173')

    addRestaurant(restaurantNames[0])
    goToRestaurantPage(restaurantNames[0])

    shownElementsArePresentAtTheStart(restaurantNames[0])
    hiddenElementsAreNotPresentAtTheStart()

    backButtonAllowsGoingToPreviousPage(restaurantNames[0])
    modalCanBeCancelled()
    modalDisplaysValidationErrors()
    modalAllowsAddingDish(dishNames[0])
    dishesPersistedWhenLeavingThePage(restaurantNames[0], dishNames[1])
    // dishesStoredPerRestaurant(
    //   restaurantNames[0],
    //   restaurantNames[1],
    //   dishNames[2],
    //   dishNames[3],
    // )
  })
})
