import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">
        Made with <span className="heart-icon">&nbsp;❤&nbsp;</span> using&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS
        </a>
      </p>
    </div>
  )
}

export default Footer
