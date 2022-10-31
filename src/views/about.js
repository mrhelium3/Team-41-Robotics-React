import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Team 41 Robotics</title>
        <meta property="og:title" content="About - Team 41 Robotics" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="about-banner">
        <h1 className="about-text">Our Mission</h1>
        <span className="about-text01">
          <span className="about-text02">
            Students come into the program with varying levels and knowledge,
            and by the time they leave they excel in integral skills that will
            support them in the industries of the future. Team 41 hopes to
            inspire students, through challenge, and success to pursue STEM
            education and support their communities.
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <img
        alt="image"
        src="https://team41robo.com/images/about.webp"
        loading="eager"
        className="about-image"
      />
      <div className="about-banner1">
        <h1 className="about-text05">
          <span>Program Summary</span>
          <br></br>
        </h1>
        <span className="about-text08">
          <span>
            Team 41 was founded in 1997 in the hopes to expand Science,
            Technology, Engineering, and Math (STEM) education in the district
            and create the future engineers of the community. The team is
            located in Warren, NJ out of Watchung Hills Regional High School
            which encompasses students of fours towns. Using FIRST and the FIRST
            Robotics competition, students learn and engage with CAD,
            manufacturing, electrical engineering, programming, and business
            concepts.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="about-text10"></br>
          <br className="about-text11"></br>
          <span>
            What started out as a simple program has led to students graduating
            the program to become entrepreneurs, engineers, business leaders,
            and many have returned to help the next generation. Throughout the
            years, the team has fluctuated, but it has remained a key component
            of the FIRST community in and around the Mid-Atlantic Region. Today,
            the team has over 40 members, with 4 mentors and 3 advisors from the
            engineering world. These mentors are here to guide the students and
            let them learn from their mistakes. They foster an environment in
            where students are not just given answers but must learn and adapt
            to not just build the best robot but prepare for their futures.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="about-text13"></br>
          <br className="about-text14"></br>
          <span>
            In the past few years, the team has expanded in capabilities with
            new tools such as a CNC, and a new Plasma Cutter which was acquired
            by the team in 2021. These new expansions have allowed the students
            on the team to not just create better robots, but also learn new
            skills from manufacturing to on the spot problem-solving.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="about-text16"></br>
          <br className="about-text17"></br>
          <br></br>
          <br></br>
        </span>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default About
