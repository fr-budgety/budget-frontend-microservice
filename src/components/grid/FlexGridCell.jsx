import React from 'react';
import PropTypes from 'prop-types';

//Expected sizes: 1of1, 1of2, 1of3, 1of4, 1of5, 1of6, auto

export default function FlexGridCell({children, size}) {
  return (
    <div className={`flex-cell cell-${size}`}>
      {children}
    </div>
  )
}

FlexGridCell.propTypes = {
    children: PropTypes.array.isRequired,
    size: PropTypes.string.isRequired
}