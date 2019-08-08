import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import vConsole from 'vconsole'

import './reset.css'
import './index.css'

function WorkSpace() {
  const [isFocus, setFocus] = React.useState(false)
  const [isModalOpen, toggleModal] = React.useState(false)

  const controlledInput = React.useRef()

  const closeModal = (e) => {
    if (e.target.classList.contains('layer_wrap')) {
      toggleModal(false)
    }
  }

  const toFocus = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.currentTarget)
    if (!controlledInput) {
      return
    }
    if (e) {
      controlledInput.current.focus()
    }
  }

  return (
    <>
      <div className={`container ${isFocus ? 'input-focused' : ''}`}>
        <input
          className="input"
          type="text"
          name="name"
          onFocus={(e) => {
            setFocus(true)
          }}
          onBlur={toFocus}
          autoComplete="off"
          autoFocus={true}
          ref={controlledInput}
        />
        <button className="modal-trigger-button" onClick={() => toggleModal(true)}>modal open</button>
        <div>
          <button className="button">NEXT</button>
        </div>
      </div>
      {isModalOpen && (
      <div className="layer_wrap _dialog" onClick={closeModal}>
        <div className="layer_inner layer_v1">
          <p className="desc portals_scroll">
            <input className="input" autoFocus={true}></input>
          </p>
        </div>
      </div>
    )}
    </>
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
        <Route path='/input' component={WorkSpace} />
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
