import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <header>
          <nav>
              <Link to="/">edit user info</Link>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
          </nav>  
        </header>
    )
}
