import React from 'react';
import PropTypes from 'prop-types';

const MainContentArea = ({children}) => {
  return (
    <div className="MainContentArea">
      {children}
    </div>
  )
}

MainContentArea.propTypes = {
    children: PropTypes.array.isRequired || PropTypes.object.isRequired
}

export default MainContentArea;