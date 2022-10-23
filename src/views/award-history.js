import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './award-history.css'

const AwardHistory = (props) => {
  return (
    <div className="award-history-container">
      <Helmet>
        <title>Award-History - Team 41 Robotics</title>
        <meta property="og:title" content="Award-History - Team 41 Robotics" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="award-history-hero">
        <h1 className="award-history-text">Let&apos;s keep things organized</h1>
        <span className="award-history-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="award-history-btn-group">
          <button className="award-history-button button">Get Started</button>
          <button className="award-history-button1 button">Learn More</button>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default AwardHistory
