import * as React from 'react'

import Tab, { TabProps } from './Tab'

import './style.scss'

type TabsProps = {
  items: Array<TabProps>,
}

const Tabs: React.FC<TabsProps> = ({ items }): JSX.Element => {
  return (
    <div className="tabs">
      {
        items.map((tab, index) => {
          return (
            <Tab 
              key={index} 
              text={tab.text} 
              active={tab.active}
              callback={tab.callback} 
            />
          )
        })
      }
    </div>
  )
}

export default Tabs