import React from 'react';
import PropTypes from 'prop-types';

export default function FlexGridContainer({children, type, className}) {
  return (
    <div className={`flex-container ${type} ${className}`}>
      {children}
    </div>
  )
}

FlexGridContainer.defaultProps = {
    type: '',
    className: ''
}

FlexGridContainer.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.array.isRequired
}