import { createRef } from 'react'
import { render, screen } from '@testing-library/react'

import * as Icons from '../src'

// @ts-expect-error
const FirstIcon = Icons[Object.keys(Icons)[0]]

describe('icon', () => {
  test('should have correct attrs', () => {
    render(<FirstIcon data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('class', 'SvgIcon')
    expect(icon).toHaveAttribute('focusable', 'false')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  })

  test('should set ref for svg', () => {
    const ref = createRef<SVGSVGElement>()
    render(<FirstIcon ref={ref} data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(ref.current).toBe(icon)
  })

  test('should set size for svg', () => {
    render(<FirstIcon size={12} data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('width', '12')
    expect(icon).toHaveAttribute('height', '12')
  })

  test('should set additional className for svg', () => {
    render(<FirstIcon className="Icon" data-testid="icon" />)
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('class', 'SvgIcon Icon')
  })

  Object.entries(Icons).map(([name, Icon]) => {
    test(name, () => {
      render(<Icon data-testid="icon" />)
      expect(screen.getByTestId('icon')).toMatchSnapshot()
    })
  })
})
