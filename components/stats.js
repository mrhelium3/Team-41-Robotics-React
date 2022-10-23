import React from 'react'

import PropTypes from 'prop-types'

const Stats = (props) => {
  return (
    <>
      <div className={`stats-stats ${props.rootClassName} `}>
        <div className="stats-stat">
          <h1 className="stats-text">{props.heading}</h1>
          <span className="stats-text01">
            <span>
              Events
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
        </div>
        <div className="stats-stat1">
          <h1 className="stats-text04">
            <span>26</span>
            <br></br>
          </h1>
          <span className="stats-text07">
            <span>Seasons Competed</span>
            <br></br>
          </span>
        </div>
        <div className="stats-stat2">
          <h1 className="stats-text10">{props.heading1}</h1>
          <span className="stats-text11">
            <span>Awards Won</span>
            <br></br>
          </span>
        </div>
        <div className="stats-stat3">
          <h1 className="stats-text14">
            <span>
              8
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h1>
          <span className="stats-text17">
            <span>Trips  to FRC Championship</span>
            <br></br>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .stats-stats {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-threeunits);
            grid-gap: var(--dl-space-space-twounits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            background-color: var(--dl-color-gray-700);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .stats-stat {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats-text {
            color: #f8d002;
            font-size: 3rem;
          }
          .stats-text01 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats-text04 {
            color: #f8d002;
            font-size: 3rem;
          }
          .stats-text07 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats-text10 {
            color: #f8d002;
            font-size: 3rem;
          }
          .stats-text11 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-stat3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .stats-text14 {
            color: #f8d002;
            font-size: 3rem;
          }
          .stats-text17 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-root-class-name {
            left: 0px;
            bottom: 181px;
            position: static;
            max-width: 100%;
            background-color: var(--dl-color-gray-700);
          }
          @media (max-width: 1600px) {
            .stats-root-class-name {
              background-color: var(--dl-color-gray-500);
            }
          }
          @media (max-width: 991px) {
            .stats-text {
              text-align: center;
            }
            .stats-text04 {
              text-align: center;
            }
            .stats-text10 {
              text-align: center;
            }
            .stats-text14 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .stats-stats {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              grid-template-columns: 1fr 1fr;
            }
            .stats-text01 {
              text-align: center;
            }
            .stats-text07 {
              text-align: center;
            }
            .stats-text11 {
              text-align: center;
            }
            .stats-text17 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .stats-stats {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
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
