import React from 'react';
import PropTypes from 'prop-types';

export default function FlexGridContainer({children, type}) {
  return (
    <div className={`flex-container ${type}`}>
      {children}
    </div>
  )
}

FlexGridContainer.defaultProps = {
    type: ''
}

FlexGridContainer.propTypes = {
    type: PropTypes.string,
    children: PropTypes.array.isRequired
}