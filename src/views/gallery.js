import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-container">
      <Helmet>
        <title>Gallery - Team 41 Robotics</title>
        <meta property="og:title" content="Gallery - Team 41 Robotics" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="gallery-container1">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="gallery-image"
        />
      </div>
      <div className="gallery-container2"></div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Gallery
