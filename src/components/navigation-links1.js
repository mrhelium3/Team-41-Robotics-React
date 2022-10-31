import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/sponsors" className="navigation-links1-navlink1">
        {props.sponsors}
      </Link>
      <Link to="/gallery" className="navigation-links1-navlink2">
        {props.gallery}
      </Link>
      <a
        href="https://wheatrobotics.org"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links1-link"
      >
        {props.gallery1}
      </a>
      <a
        href="https://roboguide.team41robo.com"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links1-link1"
      >
        {props.gallery11}
      </a>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  rootClassName: '',
  text: 'About',
  gallery11: 'Robo Guide',
  gallery: 'Gallery',
  sponsors: 'Sponsors',
  gallery1: 'WHEAT',
}

NavigationLinks1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  gallery11: PropTypes.string,
  gallery: PropTypes.string,
  sponsors: PropTypes.string,
  gallery1: PropTypes.string,
}

export default NavigationLinks1
