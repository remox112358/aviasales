import * as React from 'react'
import { useDispatch } from 'react-redux'

import { Sort } from '../../redux/reducers/app/type'
import { appSetSort } from '../../redux/reducers/app/actions'

import { useTypedSelector } from '../../hooks'

import { Tabs } from '../shared'

const FilterTabs: React.FC = (): JSX.Element => {
  const { sort } = useTypedSelector(state => state.app)
  
  const dispatch = useDispatch()

  const items = [
    {
      text: 'Самый дешевый',
      active: sort === Sort.CHEAP,
      callback: () => dispatch(appSetSort(Sort.CHEAP)),
    },
    {
      text: 'Самый быстрый',
      active: sort === Sort.QUICK,
      callback: () => dispatch(appSetSort(Sort.QUICK)),
    },
    {
      text: 'Оптимальный',
      active: sort === Sort.OPTIMAL,
      callback: () => dispatch(appSetSort(Sort.OPTIMAL)),
    }
  ]

  return (
    <Tabs items={items} />
  )
}

export default FilterTabs