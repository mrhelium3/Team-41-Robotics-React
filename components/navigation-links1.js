import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <Link href="/award-history">
          <a className="navigation-links1-link">{props.text}</a>
        </Link>
        <Link href="/sponsors">
          <a className="navigation-links1-link1">{props.sponsors}</a>
        </Link>
        <Link href="/gallery">
          <a className="navigation-links1-link2">{props.gallery}</a>
        </Link>
        <a
          href="https://wheatrobotics.org"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-links1-link3"
        >
          {props.gallery1}
        </a>
        <a
          href="https://roboguide.team41robo.com"
          target="_blank"
          rel="noreferrer noopener"
          className="navigation-links1-link4"
        >
          {props.gallery11}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-link {
            text-decoration: none;
          }
          .navigation-links1-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links1-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          @media (max-width: 1600px) {
            .navigation-links1-link2 {
              margin-right: 0px;
            }
            .navigation-links1-link3 {
              margin-right: 0px;
            }
            .navigation-links1-link4 {
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  rootClassName: '',
  text: 'About',
  gallery: 'Gallery',
  sponsors: 'Sponsors',
  gallery1: 'WHEAT',
  gallery11: 'Robo Guide',
}

NavigationLinks1.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  gallery: PropTypes.string,
  sponsors: PropTypes.string,
  gallery1: PropTypes.string,
  gallery11: PropTypes.string,
}

export default NavigationLinks1
