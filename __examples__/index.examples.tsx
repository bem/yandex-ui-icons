import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import * as Icons from '../src'
import './styles.css'

export default {
  title: 'Icon',
} as Meta

type Size = 12 | 16 | 24 | 32

export const Showcase = () => {
  const [size, setSize] = useState<Size>(24)

  return (
    <>
      <div className="Header">
        <select value={size} onChange={(event) => setSize(Number(event.target.value) as Size)}>
          <option value={12}>Size 12</option>
          <option value={16}>Size 16</option>
          <option value={24}>Size 24</option>
          <option value={32}>Size 32</option>
        </select>
      </div>
      <div className="Grid">
        {Object.entries(Icons).map(([name, Icon]) => (
          <div className="Grid-Item" key={name}>
            <Icon size={size} />
            <div className="Grid-Caption">{name}</div>
          </div>
        ))}
      </div>
    </>
  )
}
