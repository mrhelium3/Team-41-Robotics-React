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
      </div>
      <div className="stats-stat1">
        <h1 className="stats-text04">
          <span className="">26</span>
          <br className=""></br>
        </h1>
        <span className="stats-text07">
          <span className="">Seasons Competed</span>
          <br className=""></br>
        </span>
      </div>
      <div className="stats-stat2">
        <h1 className="stats-text10">{props.heading1}</h1>
        <span className="stats-text11">
          <span className="">Awards Won</span>
          <br className=""></br>
        </span>
      </div>
      <div className="stats-stat3">
        <h1 className="stats-text14">
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
        <span className="stats-text17">
          <span className="">Trips  to FRC Championship</span>
          <br className=""></br>
        </span>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  heading1: '19',
  heading: '56',
  rootClassName: '',
}

Stats.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Stats
