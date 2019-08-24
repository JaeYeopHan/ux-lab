import React from 'react'

import './Modal.css'

export function Modal(props) {
  const onClickDimmed = e => {
    if (e.target.classList.contains('modal_wrapper')) {
      props.close()
    }
  }

  const styles = { display: props.isOpen ? 'block' : 'none' }

  return (
    <div className="modal_wrapper" onClick={onClickDimmed} style={styles}>
      <div className="modal_contents">
        <h1>Modal</h1>
        <div>test contents</div>
        <button onClick={props.close}>close</button>
      </div>
    </div>
  )
}
