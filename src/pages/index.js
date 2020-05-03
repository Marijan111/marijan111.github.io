import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './css/index.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Marijan Batarilo"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div className="landing-grid">
      <div className="banner-text">
        <h2>Hello, I'm Marijan Batarilo</h2>
        <h1>Web Developer</h1>
        <hr />
        <p>HTML/CSS | JavaScript | ReactJS</p>
        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/marijan-batarilo-0516a6172/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>
          {/* Codepen */}
          <a
            href="https://codepen.io/MarijanBao/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-codepen" aria-hidden="true" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Marijan111"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="button">
        <a
          href="https://github.com/marijan111/My_CV/raw/master/CV-Marijan_Batarilo.pdf"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
        <p className="top">click to begin</p>
        <p className="bottom">86.1KB .pdf</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
