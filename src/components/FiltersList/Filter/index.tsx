import React, { useState } from 'react'

import { Checkbox } from '../../shared'

import './style.scss'

type FilterProps = {
  name: string,
  active?: boolean,
}

const Filter: React.FC<FilterProps> = ({ name, active = false }): JSX.Element => {
  const [isActive, setIsActive] = useState(active)
  
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (): void => {
    setIsActive(!isActive)
  }
  
  return (
    <div
      onClick={clickHandler} 
      className={`filter ${isActive ? 'active' : ''}`}
    >
      <Checkbox checked={isActive} />
      <span className="filter__name">{ name }</span>
    </div>
  )
}

export default Filter