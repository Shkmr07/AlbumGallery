import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <h1>Album Gallery</h1>
        <ul>
            <li>
                <Link to={'album'}>Add Album</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar