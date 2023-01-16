import React from 'react'
import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '../../src/App'

test('should display the correct text', () => {
  render(<App />)
  const title = within(screen.getByText('Restaurant Rating'))

  expect(title).toBeDefined()
})
