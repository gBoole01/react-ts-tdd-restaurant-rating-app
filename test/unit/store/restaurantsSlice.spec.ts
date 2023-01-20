import { describe, expect, test } from 'vitest'
import reducer, {
  addRestaurant,
  RestaurantsState,
} from '../../../src/store/restaurantsSlice'

describe('restaurantsSlice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      restaurants: [],
    })
  })

  test('should handle a restaurant being added to an empty list', () => {
    const previousState: RestaurantsState = { restaurants: [] }
    expect(
      reducer(previousState, addRestaurant({ name: 'Oshi Sushi' })),
    ).toEqual({
      restaurants: [{ name: 'Oshi Sushi' }],
    })
  })

  test('should handle a restaurant being added to an existing list', () => {
    const previousState: RestaurantsState = {
      restaurants: [{ name: 'Oshi Sushi' }],
    }
    expect(
      reducer(previousState, addRestaurant({ name: 'Kokomo Burger' })),
    ).toEqual({
      restaurants: [{ name: 'Oshi Sushi' }, { name: 'Kokomo Burger' }],
    })
  })
})
