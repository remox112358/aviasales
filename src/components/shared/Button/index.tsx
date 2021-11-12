import * as React from 'react'

import './style.scss'

type ButtonProps = {
  children?: any,
  className?: string,
  callback?: () => void,
}

const Button: React.FC<ButtonProps> = ({ children, callback, className = '' }): JSX.Element => {
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    if (callback)
      callback()
  }
  
  return (
    <button
      onClick={clickHandler} 
      className={`button ${className}`}
    >
      { children }
    </button>
  )
}

export default Button