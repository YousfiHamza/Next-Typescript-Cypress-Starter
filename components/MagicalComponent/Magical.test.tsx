import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import MagicalComponent from './Magical.component'

describe('Magical Button Display', () => {
  it('should display the button', () => {
    const { getByRole } = render(<MagicalComponent />)

    const myButton = getByRole('button')

    expect(myButton).toBeVisible()
  })

  it('should display the MAGIC', () => {
    const { getByRole, getByTestId } = render(<MagicalComponent />)

    const myButton = getByRole('button')

    fireEvent.click(myButton)

    const magic = getByTestId('magix')

    expect(magic).toBeVisible()
    expect(magic).toHaveTextContent('MAGIC')
  })

  it('should hide the MAGIC', () => {
    const { getByRole, getByTestId } = render(<MagicalComponent />)

    const myButton = getByRole('button')

    fireEvent.click(myButton)

    const magic = getByTestId('magix')

    expect(magic).toBeVisible()
    expect(magic).toHaveTextContent('MAGIC')

    fireEvent.click(myButton)

    expect(magic).not.toBeVisible()
  })
})
