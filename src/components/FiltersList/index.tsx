import * as React from 'react'

import { Card } from '../index'
import Filter from './Filter'

import './style.scss'

const FiltersList: React.FC = (): JSX.Element => {
  return (
    <Card>
      <div className="filters">
        <span className="filters__title">Количество пересадок</span>
        <div className="filters__list">
          <Filter name="Все" />
          <Filter name="Без пересадок" />
          <Filter name="1 пересадка" />
          <Filter name="2 пересадки" />
          <Filter name="3 пересадки" />
        </div>
      </div>
    </Card>
  )
}

export default FiltersList