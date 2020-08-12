import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div id="header">
    <Link className="header-link" to="/">
      Home
    </Link>
    <Link className="header-link" to="/about">
      About
    </Link>
  </div>
)

export default Header
