import React from 'react';
import PropTypes from 'prop-types';

export default function FormRow({children}) {
  return (
    <div className="FormRow">
      {children}
    </div>
  )
}

FormRow.propTypes = {
    children: PropTypes.array.isRequired,
}