import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './DrawerTransition.css'

export function DrawerTransition(props) {
  return <CSSTransition>{props.children}</CSSTransition>
}
