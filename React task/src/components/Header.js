import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <div className='title'><Link className="title-link" to="/">BOOKSTORE</Link></div>
        <nav className='nav-bar'>
          <ul>        
          <li><Link className='navbar-link' to="/">Home</Link></li>
          <li><Link className='navbar-link' to="/orders">Orders</Link></li>
          <li><Link className='navbar-link' to="/cart">Cart</Link></li>
          </ul> 
        </nav>
    </header>
  )
}

export default Header;