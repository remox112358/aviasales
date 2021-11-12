import * as React from 'react'

import { Card } from '../../shared'

import s7 from '../../../assets/images/s7.png'

import './style.scss'

const Ticket: React.FC = (): JSX.Element => {
  return (
    <Card>
      <div className="ticket">
        <div className="ticket__header">
          <span className="ticket__price">13 400 Р</span>
          <div className="ticket__company">
            <img src={s7} alt="S7" />
          </div>
        </div>
        <div className="ticket__body">
          <div className="ticket__flight">
            <div className="block">
              <span className="block__key">MOW – HKT</span>
              <span className="block__value">10:45 – 08:00</span>
            </div>
            <div className="block">
              <span className="block__key">В пути</span>
              <span className="block__value">21ч 15м</span>
            </div>
            <div className="block">
              <span className="block__key">2 пересадки</span>
              <span className="block__value">HKG, JNB</span>
            </div>
          </div>
          <div className="ticket__flight">
            <div className="block">
              <span className="block__key">MOW – HKT</span>
              <span className="block__value">11:20 – 00:50</span>
            </div>
            <div className="block">
              <span className="block__key">В пути</span>
              <span className="block__value">13ч 30м</span>
            </div>
            <div className="block">
              <span className="block__key">1 пересадка</span>
              <span className="block__value">HKG</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Ticket