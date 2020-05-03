import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const menuText = { color: '#000', textDecoration: 'none' }

export default () => (
  <div className="menu">
    <ul>
      <li>
        <AniLink
          rel="next"
          to="/"
          style={menuText}
          paintDrip
          hex="#ffa600"
          duration={0.35}
          activeStyle={{ color: '#ffa600' }}
        >
          Home
        </AniLink>
      </li>
      <hr style={{ border: '3px dotted black' }} />
      <li>
        <AniLink
          rel="next"
          to="projects"
          style={menuText}
          paintDrip
          hex="#ffa600"
          duration={0.35}
          activeStyle={{ color: '#ffa600' }}
        >
          Projects
        </AniLink>
      </li>
      <hr style={{ border: '3px dotted black' }} />
      <li>
        <AniLink
          rel="next"
          to="contact"
          style={menuText}
          paintDrip
          hex="#ffa600"
          duration={0.35}
          activeStyle={{ color: '#ffa600' }}
        >
          Contact
        </AniLink>
      </li>
    </ul>
  </div>
)
