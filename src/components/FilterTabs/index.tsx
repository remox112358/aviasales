import * as React from 'react'

import { Tabs } from '../shared'

const FilterTabs: React.FC = (): JSX.Element => {
  const items = [
    {
      active: true,
      text: 'Самый дешевый',
      callback: () => {
        console.log(1)
      },
    },
    {
      text: 'Самый быстрый',
      callback: () => {
        console.log(2)
      },
    },
    {
      text: 'Оптимальный',
      callback: () => {
        console.log(3)
      },
    }
  ]

  return (
    <Tabs items={items} />
  )
}

export default FilterTabs