import React from 'react';
import PropTypes from 'prop-types';

export default function FlexGridContainer({children, type, className, size}) {
  return (
    <div className={`flex-container ${type} ${className}`} style={size && {width:`${size}%`}}>
      {children}
    </div>
  )
}

FlexGridContainer.defaultProps = {
    type: '',
    className: '',
    size: 60,
}

FlexGridContainer.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.array.isRequired,
    size: PropTypes.number
}