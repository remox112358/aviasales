import React, { useState } from 'react'

import { Icon } from '../index'

import './style.scss'

type CheckboxProps = {
  checked?: boolean,
  className?: string,
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, className = '' }): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked)
  
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (): void => {
    setIsChecked(!isChecked)
  }

  return (
    <div
      onClick={clickHandler} 
      className={`checkbox ${isChecked ? 'checked' : ''} ${className}`}
    >
      <Icon name="check" />
    </div>
  )
}

export default Checkbox