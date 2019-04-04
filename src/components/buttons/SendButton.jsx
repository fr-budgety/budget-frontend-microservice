import React from "react";
import PropTypes from 'prop-types';

export default function SendButton({className}) {
  return (
    <button className={`no-style ${className}`} type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" type="button" className="SendButton" width="35" height="35" viewBox="0 0 35 35">
      <path
        id="ios-arrow-dropright-circle"
        d="M48,65.5A17.5,17.5,0,1,0,65.5,48,17.5,17.5,0,0,0,48,65.5Zm20.571,0L61.68,58.677a1.624,1.624,0,0,1,2.3-2.3L72,64.431a1.622,1.622,0,0,1,.05,2.238L64.145,74.6a1.621,1.621,0,1,1-2.3-2.288Z"
        transform="translate(-48 -48)"
        fill="#43425d"
      />
    </svg>
    </button>
  );
}

SendButton.propTypes = {
  className: PropTypes.string
}