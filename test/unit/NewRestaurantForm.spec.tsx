import React from 'react'
import { expect, test, describe, vi, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import NewRestaurantForm from '../../src/components/NewRestaurantForm'

vi.mock('react-redux', async () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(await vi.importActual<any>('react-redux')),
  useDispatch: vi.fn(),
}))

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
    test('dispatches action to state manager', () => {
      const dispatchMock = vi.fn()
      // @ts-expect-error: Type change because of mocking
      const dispatchFn = useDispatch.mockReturnValue(dispatchMock)
      expect(dispatchFn).toHaveBeenCalled()
    })
  })

  describe('clicking the cancel button', () => {
    test('calls the closeModal handler', () => {
      fireEvent.click(getByTestId('closeNewRestaurantModalButton'))
      expect(closeModalHandler).toHaveBeenCalled()
    })
  })
})
