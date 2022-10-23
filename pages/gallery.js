import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-container">
        <Head>
          <title>Gallery - Team 41 Robotics</title>
          <meta property="og:title" content="Gallery - Team 41 Robotics" />
        </Head>
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
      <style jsx>
        {`
          .gallery-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .gallery-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .gallery-image {
            width: 504px;
            height: 651px;
            object-fit: cover;
          }
          .gallery-container2 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 795px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Gallery
