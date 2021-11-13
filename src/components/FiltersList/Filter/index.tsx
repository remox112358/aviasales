import React from 'react'
import { useDispatch } from 'react-redux'

import { appToggleFilter } from '../../../redux/reducers/app/actions'
import { Filter as FilterType } from '../../../redux/reducers/app/type'

import { Checkbox } from '../../shared'

import './style.scss'

type FilterProps = {
  name: string,
  active?: boolean,
  value: FilterType,
}

const Filter: React.FC<FilterProps> = ({ name, value, active = false }): JSX.Element => {
  const dispatch = useDispatch()
  
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (): void => {
    dispatch(appToggleFilter(value))
  }
  
  return (
    <div
      onClick={clickHandler} 
      className={`filter ${active ? 'active' : ''}`}
    >
      <Checkbox checked={active} />
      <span className="filter__name">{ name }</span>
    </div>
  )
}

export default Filter