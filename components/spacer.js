import React from 'react'

import PropTypes from 'prop-types'

const Spacer = (props) => {
  return (
    <>
      <div className={`spacer-container ${props.rootClassName} `}></div>
      <style jsx>
        {`
          .spacer-container {
            width: 100%;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Spacer.defaultProps = {
  rootClassName: '',
}

Spacer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Spacer
