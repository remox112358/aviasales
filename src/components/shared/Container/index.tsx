import * as React from 'react'

import './style.scss'

type ContainerProps = {
  children?: any,
  className?: string,
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }): JSX.Element => {
  return (
    <div className={`container ${className}`}>
      { children }
    </div>
  )
}

export default Container