import React from 'react';
import PropTypes from 'prop-types';

const SectionArea = ({children, className}) => {
  return (
    <div className={`SectionArea ${className}`}>
      {children}
    </div>
  )
}

SectionArea.propTypes = {
    children: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default SectionArea;