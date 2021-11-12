import * as React from 'react'

import { Icon } from '../index'

import './style.scss'

type CheckboxProps = {
  checked?: boolean,
  className?: string,
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, className = '' }): JSX.Element => {
  return (
    <div className={`checkbox ${checked ? 'checked' : ''} ${className}`}>
      <Icon name="check" />
    </div>
  )
}

export default Checkbox