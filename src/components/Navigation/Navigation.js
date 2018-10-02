import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
        <ul className="main-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trending">Trending Movies</Link></li>
          <li>
            <Link to={{ 
              pathname: "/about",
              hash: "test",
              search: "?a=123"
            }} replace={true}>About</Link>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> 
    )
  }
}

export default Navigation
