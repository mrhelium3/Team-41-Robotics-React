import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Stats from '../components/stats'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Team 41 Robotics</title>
          <meta property="og:title" content="Team 41 Robotics" />
        </Head>
        <Link href="/">
          <a className="home-link">
            <Header
              rootClassName="header-root-class-name2"
              className="home-component"
            ></Header>
          </a>
        </Link>
        <div className="home-hero"></div>
        <Stats rootClassName="stats-root-class-name"></Stats>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link {
            display: contents;
          }
          .home-component {
            text-decoration: none;
          }
          .home-hero {
            width: 100%;
            height: 635px;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            z-index: 100;
            align-self: flex-end;
            min-height: 80vh;
            align-items: center;
            margin-left: 0px;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/background-1500h.jpg');
            background-position: center;
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: var(--dl-size-size-medium);
              align-self: flex-start;
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              background-image: url('/playground_assets/background-1500h.jpg');
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
