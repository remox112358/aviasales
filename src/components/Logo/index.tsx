import * as React from 'react'

import logo from '../../assets/images/logo.svg'

import './style.scss'

const Logo: React.FC = (): JSX.Element => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo