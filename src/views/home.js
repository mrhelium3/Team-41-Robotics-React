import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Stats from '../components/stats'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Team 41 Robotics</title>
        <meta property="og:title" content="Team 41 Robotics" />
      </Helmet>
      <Link to="/" className="home-navlink">
        <Header
          rootClassName="header-root-class-name2"
          className="home-component"
        ></Header>
      </Link>
      <div className="home-hero"></div>
      <Stats rootClassName="stats-root-class-name"></Stats>
      <Footer></Footer>
    </div>
  )
}

export default Home
