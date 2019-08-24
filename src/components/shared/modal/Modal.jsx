import React from 'react'

export function Modal(props) {
  return (
    <div className="layer_wrap close_modal" onClick={props.onClickContainer}>
      <div className="layer_inner layer_v1 focus_input" onClick={props.onClickLayer}>
        <p className="desc">
          <input className="input" type="tel" autoFocus={true} ref={props.controlledInput}></input>
          <button onClick={() => props.toggleModal(false)}>close</button>
        </p>
      </div>
    </div>
  )
}
