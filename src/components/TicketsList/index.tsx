import * as React from 'react'

import { Button } from '../shared'

import './style.scss'

const TicketsList: React.FC = (): JSX.Element => {
  return (
    <div className="tickets">
      <Button>Показать еще 5 билетов!</Button>
    </div>
  )
}

export default TicketsList