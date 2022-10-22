import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AwardHistory from './views/award-history'
import Home from './views/home'
import Gallery from './views/gallery'
import Sponsors from './views/sponsors'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AwardHistory} exact path="/award-history" />
        <Route component={Home} exact path="/" />
        <Route component={Gallery} exact path="/gallery" />
        <Route component={Sponsors} exact path="/sponsors" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
