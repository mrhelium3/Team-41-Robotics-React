import React from 'react'

import PropTypes from 'prop-types'

import './spacer.css'

const Spacer = (props) => {
  return <div className={`spacer-container ${props.rootClassName} `}></div>
}

Spacer.defaultProps = {
  rootClassName: '',
}

Spacer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Spacer
