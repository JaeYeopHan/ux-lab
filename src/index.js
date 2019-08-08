import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import vConsole from 'vconsole'

import { HomePage } from './components/Home'
import { InputWorkSpace } from './components/InputWorkSpace'

import './reset.css'
import './index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/input' component={InputWorkSpace} />
        <Route exact={true} path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

new vConsole()

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
