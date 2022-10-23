import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Spacer from '../components/spacer'
import FeatureCard1 from '../components/feature-card1'
import Footer from '../components/footer'

const Sponsors = (props) => {
  return (
    <>
      <div className="sponsors-container">
        <Head>
          <title>Sponsors - Team 41 Robotics</title>
          <meta property="og:title" content="Sponsors - Team 41 Robotics" />
        </Head>
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
              image_src1="https://team41robo.com/images/lions.png"
              rootClassName="rootClassName1"
            ></FeatureCard1>
            <div className="sponsors-feature-card">
              <h2 className="sponsors-text03">Picut Manufacturing</h2>
              <img
                alt="Error Loading Image"
                src="https://team41robo.com/images/picut.jpg"
                className="sponsors-image"
              />
            </div>
            <div className="sponsors-feature-card1">
              <h2 className="sponsors-text04">Knotts Company</h2>
              <img
                alt="Error Loading Image"
                src="https://team41robo.com/images/knotts.png"
                loading="eager"
                className="sponsors-image1"
              />
            </div>
            <div className="sponsors-feature-card2">
              <h2 className="sponsors-text05">Nokia Bell Labs</h2>
              <img
                alt="image"
                src="https://team41robo.com/images/nokia.png"
                className="sponsors-image2"
              />
            </div>
            <FeatureCard1
              title="Thor Labs"
              image_src1="https://team41robo.com/images/thor.png"
              rootClassName="rootClassName6"
            ></FeatureCard1>
            <FeatureCard1
              title="P&amp;R Fasteners"
              image_src1="https://team41robo.com/images/p&amp;r.webp"
              rootClassName="rootClassName5"
            ></FeatureCard1>
            <FeatureCard1
              title="Pennoni"
              image_alt1="Error Loading Image"
              image_src1="https://team41robo.com/images/pennoni.jpg"
              rootClassName="rootClassName4"
            ></FeatureCard1>
          </div>
        </div>
        <h1 className="sponsors-text06">
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
          <span className="sponsors-text09">Contact</span>
        </a>
        <Spacer rootClassName="spacer-root-class-name1"></Spacer>
        <Spacer rootClassName="spacer-root-class-name2"></Spacer>
        <Footer rootClassName="footer-root-class-name"></Footer>
        <Spacer rootClassName="spacer-root-class-name"></Spacer>
      </div>
      <style jsx>
        {`
          .sponsors-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-700);
          }
          .sponsors-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .sponsors-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .sponsors-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sponsors-feature-card:hover {
            transform: scale(1.02);
          }
          .sponsors-text03 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .sponsors-image {
            width: 216px;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .sponsors-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sponsors-feature-card1:hover {
            transform: scale(1.02);
          }
          .sponsors-text04 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .sponsors-image1 {
            width: 323px;
            height: var(--dl-size-size-medium);
            margin-top: 0px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .sponsors-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sponsors-feature-card2:hover {
            transform: scale(1.02);
          }
          .sponsors-text05 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .sponsors-image2 {
            width: 175px;
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .sponsors-link {
            display: flex;
            flex-direction: row;
            text-decoration: none;
          }
          .sponsors-text09 {
            color: rgb(0, 0, 0);
          }
          @media (max-width: 1600px) {
            .sponsors-link {
              width: 174px;
              height: 68px;
            }
            .sponsors-text09 {
              color: #000000;
              font-size: 40px;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .sponsors-container1 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .sponsors-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .sponsors-text {
              text-align: center;
            }
            .sponsors-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .sponsors-container1 {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .sponsors-text06 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Sponsors
