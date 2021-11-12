import * as React from 'react'

import { 
  Logo,
  Card,
  Container 
} from './components'

import './scss/style.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Container>
        <Logo />
        <div className="content">
          <div className="content__sidebar">
            <Card>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam mollitia sed dolore? Voluptates, exercitationem iure unde, ratione alias quidem sunt dolorum impedit cupiditate dignissimos nesciunt placeat fugit, ea necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id ad corrupti aperiam laudantium magni vero eius officia vitae possimus, repudiandae at atque harum quidem omnis explicabo sequi dolore natus!</p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App