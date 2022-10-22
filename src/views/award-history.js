import React from 'react'

import { Helmet } from 'react-helmet'

import './award-history.css'

const AwardHistory = (props) => {
  return (
    <div className="award-history-container">
      <Helmet>
        <title>Award-History - Team 41 Robotics</title>
        <meta property="og:title" content="Award-History - Team 41 Robotics" />
      </Helmet>
    </div>
  )
}

export default AwardHistory
