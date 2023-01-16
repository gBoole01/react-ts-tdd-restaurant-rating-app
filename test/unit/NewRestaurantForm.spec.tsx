import React from 'react'
import { expect, test, describe, vitest } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import NewRestaurantForm from '../../src/components/NewRestaurantForm'

describe('NewRestaurantForm', () => {
  test('clicking the save button', () => {
    const saveHandler = vitest.fn()

    const { getByTestId } = render(<NewRestaurantForm onSave={saveHandler} />)

    const input = getByTestId('newRetaurantName')
    const button = getByTestId('saveNewRestaurantButton')
    fireEvent.change(input, { target: { value: 'Oshi Sushi' } })
    fireEvent.click(button)

    expect(saveHandler).toHaveBeenCalledWith({ name: 'Oshi Sushi' })
  })
})
