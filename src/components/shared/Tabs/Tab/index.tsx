import * as React from 'react'

import './style.scss'

export type TabProps = {
  text: string,
  active?: boolean,
  callback?: () => void,
}

const Tab: React.FC<TabProps> = ({ text, callback, active = false }): JSX.Element => {
  const clickHandler: React.MouseEventHandler<HTMLDivElement> = (): void => {
    if (callback)
      callback()
  }
  
  return (
    <div 
      onClick={clickHandler}
      className={`tab ${active ? 'active' : ''}`
    }>{ text }</div>
  )
}

export default Tab