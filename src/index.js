import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function App() {
  const [isFocus, setFocus] = React.useState(false)

  return (
    <div className={`container ${isFocus ? 'input-focused' : ''}`}>
      <input
        className="input"
        type="text"
        name="name"
        onFocus={(e) => {
          e.preventDefault()
          console.log(e)
          setFocus(true)
        }}
        onBlur={(e) => {
          e.preventDefault()
          setFocus(false)
        }}
        autoComplete="off"
      />
      <div>
        <button className="button"></button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
