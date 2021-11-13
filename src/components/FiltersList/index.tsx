import * as React from 'react'
import { useTypedSelector } from '../../hooks'

import { Filter as FilterType } from '../../redux/reducers/app/type'

import { Card } from '../shared'
import Filter from './Filter'

import './style.scss'

const FiltersList: React.FC = (): JSX.Element => {
  const { filters } = useTypedSelector(state => state.app)

  const items = [
    {
      name: 'Все',
      value: FilterType.ALL,
    },
    {
      name: 'Без пересадок',
      value: FilterType.NO_TRANSFERS,
    },
    {
      name: '1 пересадка',
      value: FilterType.ONE_TRANSFER,
    },
    {
      name: '2 пересадки',
      value: FilterType.TWO_TRANSFERS,
    },
    {
      name: '3 пересадки',
      value: FilterType.THREE_TRANSFERS,
    },
  ]

  return (
    <Card className="card--filters">
      <div className="filters">
        <span className="filters__title">Количество пересадок</span>
        <div className="filters__list">
          {
            items.map(item => {
              return (
                <Filter
                  key={item.value}
                  name={item.name} 
                  value={item.value}
                  active={filters.includes(item.value)} 
                />
              )
            })
          }
        </div>
      </div>
    </Card>
  )
}

export default FiltersList