import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks1 from './navigation-links1'

const Header = (props) => {
  return (
    <>
      <header
        data-role="Accordion"
        className={`header-header ${props.rootClassName} `}
      >
        <Link href="/">
          <a className="header-link">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
          </a>
        </Link>
        <div className="header-separator"></div>
        <nav className="header-nav">
          <NavigationLinks1 rootClassName="rootClassName19"></NavigationLinks1>
        </nav>
        <div data-type="AccordionHeader" className="header-accordion-header">
          <svg viewBox="0 0 1024 1024" className="header-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="AccordionContent" className="header-accordion-content">
          <div className="header-nav1">
            <NavigationLinks1 rootClassName="rootClassName20"></NavigationLinks1>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-500);
          }
          .header-link {
            display: contents;
          }
          .header-image {
            width: 210px;
            height: 84px;
            text-decoration: none;
          }
          .header-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-gray-900);
          }
          .header-accordion-header {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .header-accordion-content {
            display: flex;
            overflow: hidden;
            max-height: 0;
            transition: 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
          }
          .header-nav1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header-root-class-name {
            max-width: 100%;
          }
          .header-root-class-name1 {
            max-width: 100%;
          }
          .header-root-class-name2 {
            max-width: 100%;
          }
          .header-root-class-name3 {
            max-width: 100%;
          }
          @media (max-width: 991px) {
            .header-nav1 {
              padding-top: 16px;
            }
          }
          @media (max-width: 767px) {
            .header-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .header-nav {
              display: none;
            }
            .header-icon {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
            }
            .header-separator {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
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
