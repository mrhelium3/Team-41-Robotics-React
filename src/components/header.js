import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-image"
        />
      </Link>
      <div className="header-separator"></div>
      <nav className="header-nav">
        <NavigationLinks1
          rootClassName="rootClassName19"
          className=""
        ></NavigationLinks1>
      </nav>
      <div data-type="AccordionHeader" className="header-accordion-header">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-type="AccordionContent" className="header-accordion-content">
        <div className="header-nav1">
          <NavigationLinks1
            rootClassName="rootClassName20"
            className=""
          ></NavigationLinks1>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_alt: 'logo',
  rootClassName: '',
  image_src: '/playground_assets/logowebsote-200h.png',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
