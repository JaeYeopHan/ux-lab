import React from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="wrap">
      <h1>Input Labs</h1>
      <div>
        <Link to='/input'>Go to Input Workspace</Link>
      </div>
      <div>
        <Link to='/transition'>Go to Transition Workspace</Link>
      </div>
    </div>
  )
}