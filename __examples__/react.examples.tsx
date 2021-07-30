import { Meta, Story } from '@storybook/react'

import * as Icons from '../src'
import './styles.css'

export default {
  title: 'Icon/React',
} as Meta

export const Showcase: Story = (_, options) => {
  const { size } = options.globals

  return (
    <div className="Grid">
      {Object.entries(Icons).map(([name, Icon]) => (
        <div className="Grid-Item" key={name}>
          <Icon size={size} />
          <div className="Grid-Caption">{name}</div>
        </div>
      ))}
    </div>
  )
}
