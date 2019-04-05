import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({children, className}) => {
  return (
    <div className={`Paper ${className}`}>
      {children}
    </div>
  )
}

Paper.defaultProps = {
  className: ''
}
Paper.propTypes = {
    children: PropTypes.object,
    className: PropTypes.string
}

export default Paper;