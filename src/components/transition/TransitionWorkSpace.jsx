import React, { useState } from 'react'

import { Modal } from './modal/Modal'

export function TransitionWorkSpace() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="wrap">
      <h1>Transition Work Space</h1>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} close={() => setModalOpen(false)}></Modal>
    </div>
  )
}
