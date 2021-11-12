import * as React from 'react'

import logo from '../../../assets/images/logo.svg'

import './style.scss'

type LogoProps = {
  className?: string,
}

const Logo: React.FC<LogoProps> = ({ className = '' }): JSX.Element => {
  return (
    <div className={`logo ${className}`}>
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo