import * as React from 'react'

import { 
  Logo,
  Container,
  FiltersList
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
        </div>
      </Container>
    </div>
  )
}

export default App