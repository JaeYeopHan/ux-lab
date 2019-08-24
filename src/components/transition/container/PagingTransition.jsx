import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './PagingTransition.css'

export function PagingTransition(props) {
  return <CSSTransition>{props.children}</CSSTransition>
}
