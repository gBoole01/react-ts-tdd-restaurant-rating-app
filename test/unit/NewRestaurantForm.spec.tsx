import React from 'react'
import { expect, test, describe, vitest } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import NewRestaurantForm from '../../src/components/NewRestaurantForm'

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    test('calls the onSave handler', () => {
      const saveHandler = vitest.fn()

      const { getByTestId } = render(<NewRestaurantForm onSave={saveHandler} />)

      const input = getByTestId('newRetaurantName')
      const button = getByTestId('saveNewRestaurantButton')
      fireEvent.change(input, { target: { value: 'Oshi Sushi' } })
      fireEvent.click(button)

      expect(saveHandler).toHaveBeenCalledWith({ name: 'Oshi Sushi' })
    })
  })
})
