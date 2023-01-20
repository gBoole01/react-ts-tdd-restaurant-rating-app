import React from 'react'
import { expect, test, describe, vi, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import NewDishForm from '../../src/components/NewDishForm'

vi.mock('react-redux', async () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(await vi.importActual<any>('react-redux')),
  useDispatch: vi.fn(),
}))

describe('<NewDishForm />', () => {
  const closeModalHandler = vi.fn()
  const { getByTestId } = render(<NewDishForm closeModal={closeModalHandler} />)

  describe('clicking the save button', () => {
    beforeEach(() => {
      fireEvent.change(getByTestId('newDishName'), {
        target: {
          id: 'dishName',
          value: 'Oshi Sushi',
        },
      })
      fireEvent.click(getByTestId('saveNewDishButton'))

      return () => cleanup
    })

    test('clears the text field', () => {
      const input = getByTestId('newDishName') as HTMLInputElement
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
      fireEvent.click(getByTestId('closeNewDishModalButton'))
      expect(closeModalHandler).toHaveBeenCalled()
    })
  })
})
