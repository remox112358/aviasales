import * as React from 'react'

import { 
  Logo, 
  Container 
} from './components'

import './scss/style.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
      </Container>
    </div>
  )
}

export default App