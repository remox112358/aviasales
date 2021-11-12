import * as React from 'react'

import icons from './icons.svg'

import './style.scss'

type IconProps = {
  name: string,
  className?: string,
}

const Icon: React.FC<IconProps> = ({ name, className = '' }): JSX.Element => {
  return (
    <div className={`icon ${className}`}>
      <svg>
        <use xlinkHref={`${icons}#${name}`}></use>
      </svg>
    </div>
  )
}

export default Icon