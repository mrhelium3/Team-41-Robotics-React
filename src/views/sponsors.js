import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Spacer from '../components/spacer'
import FeatureCard1 from '../components/feature-card1'
import Footer from '../components/footer'
import './sponsors.css'

const Sponsors = (props) => {
  return (
    <div className="sponsors-container">
      <Helmet>
        <title>Sponsors - Team 41 Robotics</title>
        <meta property="og:title" content="Sponsors - Team 41 Robotics" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <Spacer rootClassName="spacer-root-class-name"></Spacer>
      <h1 className="sponsors-text">
        <span>
          Team 41 and the WHEAT  Foundation thanks our generous sponsors!
        </span>
        <br></br>
      </h1>
      <div className="sponsors-features">
        <div className="sponsors-container1">
          <FeatureCard1
            title="Picatinny Arsenal"
            image_src="https://team41robo.com/images/pica.png"
            image_src1="https://team41robo.com/images/pica.png"
            rootClassName="rootClassName"
          ></FeatureCard1>
          <FeatureCard1
            title="Warren Lions Club"
            image_src1="https://team41robo.com/images/lions.webp"
            rootClassName="rootClassName1"
          ></FeatureCard1>
          <div className="sponsors-feature-card">
            <h2 className="sponsors-text03">Picut Manufacturing</h2>
            <img
              alt="Error Loading Image"
              src="https://team41robo.com/images/picut.webp"
              className="sponsors-image"
            />
          </div>
          <div className="sponsors-feature-card1">
            <h2 className="sponsors-text04">Knotts Company</h2>
            <img
              alt="Error Loading Image"
              src="https://team41robo.com/images/knotts.webp"
              loading="eager"
              className="sponsors-image1"
            />
          </div>
          <div className="sponsors-feature-card2">
            <h2 className="sponsors-text05">Nokia Bell Labs</h2>
            <img
              alt="image"
              src="https://team41robo.com/images/nokia.webp"
              className="sponsors-image2"
            />
          </div>
          <FeatureCard1
            title="Thor Labs"
            image_src1="https://team41robo.com/images/thor.webp"
            rootClassName="rootClassName6"
          ></FeatureCard1>
          <FeatureCard1
            title="P&amp;R Fasteners"
            image_src1="https://team41robo.com/images/p&amp;r.webp"
            rootClassName="rootClassName5"
          ></FeatureCard1>
          <div className="sponsors-feature-card3">
            <h2 className="sponsors-text06">Pennoni</h2>
            <img
              alt="Error Loading Image"
              src="https://team41robo.com/images/pennoni.webp"
              className="sponsors-image3"
            />
          </div>
        </div>
      </div>
      <h1 className="sponsors-text07">
        <span>
          Want to become a sponsor?
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
      </h1>
      <a
        href="mailto:business@team41robo.com?subject=Sponsorship Info"
        className="sponsors-link button"
      >
        <span className="sponsors-text10">Contact</span>
      </a>
      <Spacer rootClassName="spacer-root-class-name1"></Spacer>
      <Spacer rootClassName="spacer-root-class-name2"></Spacer>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Spacer rootClassName="spacer-root-class-name"></Spacer>
    </div>
  )
}

export default Sponsors
