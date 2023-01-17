import React from 'react'
import { expect, test, describe, vitest } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import NewRestaurantForm from '../../src/components/NewRestaurantForm'

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    test('calls the onSave handler', () => {
      const cancelHandler = vitest.fn()
      const saveHandler = vitest.fn()

      const { getByTestId } = render(
        <NewRestaurantForm onSave={saveHandler} onCancel={cancelHandler} />,
      )

      const input = getByTestId('newRetaurantName')
      const button = getByTestId('saveNewRestaurantButton')
      fireEvent.change(input, { target: { value: 'Oshi Sushi' } })
      fireEvent.click(button)

      expect(saveHandler).toHaveBeenCalledWith({ name: 'Oshi Sushi' })
    })
  })
  describe('clicking the cancel button', () => {
    test('calls the onCancel handler', () => {
      const cancelHandler = vitest.fn()
      const saveHandler = vitest.fn()

      const { getByTestId } = render(
        <NewRestaurantForm onSave={saveHandler} onCancel={cancelHandler} />,
      )

      const button = getByTestId('closeNewRestaurantModalButton')
      fireEvent.click(button)

      expect(cancelHandler).toHaveBeenCalled()
    })
  })
})
