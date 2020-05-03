import React, { Component } from 'react'
import Card from '../components/project_cards/cards'

import Layout from '../components/layout'
import './css/projects.css'
// import CodepenEmbedded from '../components/codepen_embed/embed.js'

class Projects extends Component {
  render() {
    return (
      <Layout>
        <div className="projects">
          <div className="category-tabs">
            <Card />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Projects
