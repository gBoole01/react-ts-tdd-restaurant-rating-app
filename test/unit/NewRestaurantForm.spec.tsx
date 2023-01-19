import React from 'react'
import { expect, test, describe, vi, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import NewRestaurantForm from '../../src/components/NewRestaurantForm'

describe('<NewRestaurantForm />', () => {
  const closeModalHandler = vi.fn()
  const { getByTestId } = render(
    <NewRestaurantForm closeModal={closeModalHandler} />,
  )

  describe('clicking the save button', () => {
    beforeEach(() => {
      fireEvent.change(getByTestId('newRestaurantName'), {
        target: {
          id: 'restaurantName',
          value: 'Oshi Sushi',
        },
      })
      fireEvent.click(getByTestId('saveNewRestaurantButton'))

      return () => cleanup
    })

    test('clears the text field', () => {
      const input = getByTestId('newRestaurantName') as HTMLInputElement
      expect(input.value).toBe('')
    })
    test('calls the closeModal handler', () => {
      waitFor(() => {
        expect(closeModalHandler).toHaveBeenCalled()
      })
    })
  })

  describe('clicking the cancel button', () => {
    test('calls the closeModal handler', () => {
      fireEvent.click(getByTestId('closeNewRestaurantModalButton'))
      expect(closeModalHandler).toHaveBeenCalled()
    })
  })
})
