import * as React from 'react'

import './style.scss'

type CardProps = {
  children?: any,
}

export const Card: React.FC<CardProps> = ({ children }): JSX.Element => {
  return (
    <div className="card">
      { children }
    </div>
  )
}

export default Card