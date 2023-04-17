/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

test(`Logo is rendered`, () => {
  render(<Header />)
  const logo = screen.getByRole(`img`)
  expect(logo).toHaveAttribute(`src`, `/images/logo/logo.png`)
  expect(logo).toHaveAttribute(`alt`, `Gatsblog`)
})
