import * as React from 'react'

import { Card, Checkbox } from '../index'

import './style.scss'

const FiltersList: React.FC = (): JSX.Element => {
  return (
    <Card>
      <div className="filters">
        <span className="filters__title">Количество пересадок</span>
        <div className="filters__list">
          <div className="filter">
            <Checkbox />
          </div>
          <div className="filter"></div>
          <div className="filter"></div>
          <div className="filter"></div>
        </div>
      </div>
    </Card>
  )
}

export default FiltersList