import * as React from 'react'

import { 
  Logo,
  Container,
} from './components/shared'

import { 
  FilterTabs,
  FiltersList,
  TicketsList
} from './components'

import './scss/style.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
        <div className="content">
          <div className="content__sidebar">
            <FiltersList />
          </div>
          <div className="content__inner">
            <FilterTabs />
            <TicketsList />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App