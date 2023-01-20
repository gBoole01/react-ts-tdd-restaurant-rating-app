import { describe, expect, test } from 'vitest'
import reducer, { addDish, DishesState } from '../../../src/store/dishesSlice'

describe('dishesSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      dishes: [],
    })
  })

  test('should handle a dish being added to an empty list', () => {
    const previousState: DishesState = { dishes: [] }
    expect(reducer(previousState, addDish({ name: 'Menu E - Duo' }))).toEqual({
      dishes: [{ name: 'Menu E - Duo' }],
    })
  })

  test('should handle a dish being added to an existing list', () => {
    const previousState: DishesState = { dishes: [{ name: 'Menu E - Duo' }] }
    expect(reducer(previousState, addDish({ name: 'Gyozas *5' }))).toEqual({
      dishes: [{ name: 'Menu E - Duo' }, { name: 'Gyozas *5' }],
    })
  })
})
