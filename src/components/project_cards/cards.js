import React, { Component } from 'react'

import './cards.css'
import jscalculator from '../../images/jscalculator.webp'
import jsclock from '../../images/jsclock.webp'
import jsimageslider from '../../images/jsimageslider.webp'
import minesweeper from '../../images/minesweeper.webp'
import jamming from '../../images/jamming.webp'

class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-body">
          <div
            rel="JavaScript calculator"
            className="content-img"
            style={{
              backgroundImage: `url(${jscalculator})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="card-text">
            <p className="tag">HTML/CSS | JavaScript</p>
            <h2>Calculator</h2>
            <p className="text">
              Calculator app built with JavaScript. On this project I've learned
              more about jQuery library and DOM manipulation.
            </p>
            <div className="links">
              <a
                href="https://github.com/marijan111/js-calculator"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                className="codepen"
                href="https://codepen.io/MarijanBao/pen/eYpBGEX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div
            rel="JavaScript clock"
            className="content-img"
            style={{
              backgroundImage: `url(${jsclock})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="card-text">
            <p className="tag">HTML/CSS | JavaScript</p>
            <h2>Clock</h2>
            <p className="text">
              Clock app built with JavaScript. Uses Web Speech API to output
              current time in audio format.
            </p>
            <div className="links">
              <a
                href="https://github.com/marijan111/js-clock"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                className="codepen"
                href="https://codepen.io/MarijanBao/pen/xxwRXWb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div
            rel="JavaScript minesweeper"
            className="content-img"
            style={{
              backgroundImage: `url(${minesweeper})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="card-text">
            <p className="tag">JavaScript</p>
            <h2>Minesweeper</h2>
            <p className="text">
              Command line minesweeper game, built using JavaScript. On this
              project I've learned about compilation process and how to better
              structure classes.
            </p>
            <div className="links">
              <a
                href="https://github.com/marijan111/minesweeper"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div
            rel="JavaScript image slider"
            className="content-img"
            style={{
              backgroundImage: `url(${jsimageslider})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="card-text">
            <p className="tag">HTML/CSS | JavaScript</p>
            <h2>Image Slider</h2>
            <p className="text">Image slider built with JavaScript.</p>
            <div className="links">
              <a
                href="https://github.com/marijan111/js-imageSlider"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              <a
                className="codepen"
                href="https://codepen.io/MarijanBao/pen/oNjYGyL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div
            rel="React.js spotify playlist creator app"
            className="content-img"
            style={{
              backgroundImage: `url(${jamming})`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="card-text">
            <p className="tag">JavaScript | React.js</p>
            <h2>Jamming</h2>
            <p className="text">
              Spotify playlist creator, uses data from Spotify API to store
              playlists on Spotify. On this project I've learned about API's and
              how to manipulate data with API.
            </p>
            <div className="links">
              <a
                href="https://github.com/marijan111/jam33ing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
