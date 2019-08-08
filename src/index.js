import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './reset.css'
import './index.css'

function InputPage() {
  const [isFocus, setFocus] = React.useState(false)

  return (
    <div className={`container ${isFocus ? 'input-focused' : ''}`}>
      <input
        className="input"
        type="text"
        name="name"
        onFocus={(e) => {
          setFocus(true)
        }}
        onBlur={(e) => {
          setFocus(false)
        }}
        autoComplete="off"
        autoFocus={true}
      />
      <div>
        <button className="button"></button>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="wrap">
      <h1>Input Labs</h1>
      <Link to='/input'>input</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/input' component={InputPage} />
        <Route exact={true} path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
