import * as React from 'react'

import './style.scss'

type ContainerProps = {
  children?: any,
}

const Container: React.FC<ContainerProps> = ({ children }): JSX.Element => {
  return (
    <div className="container">
      { children }
    </div>
  )
}

export default Container