import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({children}) => {
  return (
    <div className="Paper">
      {children}
    </div>
  )
}

Paper.propTypes = {
    children: PropTypes.object
}

export default Paper;