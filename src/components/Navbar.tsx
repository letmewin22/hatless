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

  const navbarSocial = [
    {
      link: 'https://facebook.com',
      label: 'facebook',
      icon: '/social/fb.svg',
    },
    {
      link: 'https://lenkedin.com',
      label: 'lenkedin',
      icon: '/social/linkedin.svg',
    },
    {
      link: 'https://twitter.com',
      label: 'twitter',
      icon: '/social/twitter.svg',
    },
    {
      link: 'https://instagram.com',
      label: 'instagram',
      icon: '/social/insta.svg',
    },
  ]

  const [isOpen, setIsOpen] = React.useState(false)

  const burgerHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.svg" alt="logo" className="navbar__logo-img" />
        </Link>
        <div
          className={
            isOpen ? 'navbar__right navbar__right--opened' : 'navbar__right'
          }
        >
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
          <ul className="navbar__social navbar-social">
            {navbarSocial.map(el => (
              <li key={el.link} className="navbar-social__item">
                <a
                  href={el.link}
                  aria-label={el.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={el.icon} alt={el.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={burgerHandler}
          aria-label="Menu button"
          className={
            isOpen
              ? 'navbar__burger burger burger--opened'
              : 'navbar__burger burger'
          }
        >
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </button>
      </div>
    </div>
  )
}
