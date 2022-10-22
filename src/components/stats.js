import React from 'react'

import PropTypes from 'prop-types'

import './stats.css'

const Stats = (props) => {
  return (
    <div className={`stats-stats ${props.rootClassName} `}>
      <div className="stats-stat">
        <h1 className="stats-text">{props.heading}</h1>
        <span className="stats-text01">
          <span className="">
            Events
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
        </span>
        <span className="stats-text04">{props.text}</span>
      </div>
      <div className="stats-stat1">
        <h1 className="stats-text05">
          <span className="">26</span>
          <br className=""></br>
        </h1>
        <span className="stats-text08">
          <span className="">Seasons Competed</span>
          <br className=""></br>
        </span>
        <span className="stats-text11">
          <span className="">Seaons Competed</span>
          <br className=""></br>
        </span>
      </div>
      <div className="stats-stat2">
        <h1 className="stats-text14">{props.heading1}</h1>
        <span className="stats-text15">
          <span className="">Awards Won</span>
          <br className=""></br>
        </span>
        <span className="stats-text18">
          <span className="">Awards Won</span>
          <br className=""></br>
        </span>
      </div>
      <div className="stats-stat3">
        <h1 className="stats-text21">
          <span className="">
            8
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
        </h1>
        <span className="stats-text24">
          <span className="">Trips  to FRC Championship</span>
          <br className=""></br>
        </span>
        <span className="stats-text27">{props.text1}</span>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  heading1: '19',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  heading: '56',
  rootClassName: '',
}

Stats.propTypes = {
  text: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Stats
