import React from 'react'
import { Link } from 'react-router-dom'

const LinkList = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Orders',
    link: '/orders'
  },
  {
    name: 'Cart',
    link: '/cart'
  },
]


const Header = () => {
  return(
    <header>
      <div className='title'><Link className="title-link" to="/">BOOKSTORE</Link></div>
        <nav className='nav-bar'>
          <ul>
            {
              LinkList.map((individualLink, index) => {
                return (
                  <li key={index}><Link className='navbar-link' to={individualLink.link}>{individualLink.name}</Link></li>
                )
              }
            )}
          </ul> 
        </nav>
    </header>
  )
}

export default Header;