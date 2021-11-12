import * as React from 'react'

import './style.scss'

type CardProps = {
  children?: any,
  className?: string,
}

export const Card: React.FC<CardProps> = ({ children, className = '' }): JSX.Element => {
  return (
    <div className={`card ${className}`}>
      { children }
    </div>
  )
}

export default Card