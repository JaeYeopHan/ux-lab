import React from 'react';

export function InputWorkSpace() {
  const [isModalOpen, toggleModal] = React.useState(false)

  const controlledInput = React.useRef()

  const onClickContainer = (e) => {
    if (e.target.classList.contains('close_modal')) {
      toggleModal(false)
    }
  }

  const onClickLayer = (e) => {
    if (e.target.classList.contains('focus_input')) {
      controlledInput && controlledInput.current.focus()
    }
  }

  return (
    <>
      <div className='container'>
        <input
          className="input"
          type="text"
          name="name"
          autoComplete="off"
          autoFocus={true}
        />
        <button className="modal-trigger-button" onClick={() => toggleModal(true)}>modal open</button>
        <div>
          <button className="button">NEXT</button>
        </div>
      </div>
      {isModalOpen && (
      <div className="layer_wrap close_modal" onClick={onClickContainer}>
        <div className="layer_inner layer_v1 focus_input" onClick={onClickLayer}>
          <p className="desc">
            <input className="input" type="tel" autoFocus={true} ref={controlledInput}></input>
            <button onClick={() => toggleModal(false)}>close</button>
          </p>
        </div>
      </div>
    )}
    </>
  );
}