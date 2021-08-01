import { Meta, Story } from '@storybook/react'
import { capitalCase } from 'change-case'

import * as Icons from '../src'
import './styles.css'

export default {
  title: 'Icon/Svg',
} as Meta

export const Showcase: Story = (_, options) => {
  const { size } = options.globals

  return (
    <div className="Grid">
      {Object.entries(Icons).map(([name]) => (
        <div className="Grid-Item" key={name}>
          <span
            style={{
              display: 'block',
              height: size,
              width: size,
              backgroundImage: `url(${require(`../src/${name}.svg`)})`,
              backgroundSize: '100%',
            }}
          />
          <div className="Grid-Caption">{capitalCase(name)}</div>
        </div>
      ))}
    </div>
  )
}
