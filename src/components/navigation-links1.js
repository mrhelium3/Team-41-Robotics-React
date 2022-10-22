import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/award-history" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/sponsors" className="navigation-links1-navlink1">
        {props.text1}
      </Link>
      <Link to="/gallery" className="navigation-links1-navlink2">
        {props.text3}
      </Link>
      <span className="navigation-links1-text">{props.text4}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  rootClassName: '',
  text: 'About',
  text4: 'Updates',
  text3: 'Gallery',
  text1: 'Sponsors',
}

NavigationLinks1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks1
