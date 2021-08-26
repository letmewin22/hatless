import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from './Button'

export const Navbar: React.FC = () => {
  const navbarItems = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Services',
      to: '#',
    },
    {
      text: 'About',
      to: '#',
    },
    {
      text: 'Cases',
      to: '#',
    },
    {
      text: 'Blog',
      to: '#',
    },
    {
      text: 'Vacatures',
      to: '#',
      badge: 2,
    },
    {
      text: 'Contact',
      to: '#',
    },
  ]

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.svg" alt="logo" className="navbar__logo-img" />
        </Link>
        <div className="navbar__right">
          <nav className="navbar__nav navbar-nav">
            <ul className="navbar-nav__items">
              {navbarItems.map(item => (
                <li
                  key={item.text}
                  className={`${
                    item.badge
                      ? 'navbar-nav__item navbar-nav__item--badge'
                      : 'navbar-nav__item'
                  }`}
                >
                  <Link
                    to={item.to}
                    activeClassName="navbar-nav__link--active"
                    className="navbar-nav__link"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button text="Kickstart jouw project!" />
        </div>
      </div>
    </div>
  )
}
