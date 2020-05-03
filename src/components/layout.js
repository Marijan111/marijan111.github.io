import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Toolbar from './navbar/toolbar'
import Popup from 'reactjs-popup'
import BurgerIcon from './BurgerIcon'
import Menu from './Menu'
import Footer from './footer/footer'
import './layout.css'
import './burger.css'

const styles = {
  textAlign: 'center',
}

const contentStyle = {
  background: '#f2eee9',
  width: '80%',
  border: 'none',
  transition: '0.2s',
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:300|Nunito:300,400,500"
          />
        </Helmet>
        <div className="page">
          <Toolbar />
          {children}
          <div style={styles}>
            <Popup
              modal
              overlayStyle={{
                background: '#f2eee9',
              }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              <Menu />
            </Popup>
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
