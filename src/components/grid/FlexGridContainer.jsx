import React from 'react';
import PropTypes from 'prop-types';

export default function FlexGridContainer({children}) {
  return (
    <div className="flex-container">
      {children}
    </div>
  )
}

FlexGridContainer.propTypes = {
    children: PropTypes.array.isRequired
}