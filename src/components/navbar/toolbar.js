import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import './toolbar.css'
import logo from '../../images/logo.webp'
import blackLogo from '../../images/transbg.webp'

const background = `url(${blackLogo}) center`

const toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <img src={logo} alt="Marijan Batarilo logo" />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <AniLink
              rel="next"
              to="/"
              cover
              duration={0.7}
              bg={background}
              activeStyle={{ color: '#ffa600' }}
              replace
            >
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              rel="next"
              to="projects"
              cover
              duration={0.7}
              bg={background}
              activeStyle={{ color: '#ffa600' }}
            >
              Projects
            </AniLink>
          </li>
          <li>
            <AniLink
              rel="next"
              to="contact"
              cover
              duration={0.7}
              bg={background}
              activeStyle={{ color: '#ffa600' }}
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
