import React from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="wrap">
      <h1>Input Labs</h1>
      <Link to='/input'>input</Link>
    </div>
  )
}