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
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default AwardHistory
