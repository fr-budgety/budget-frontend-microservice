import React from "react";
import PropTypes from "prop-types";
export default function ActionButtons({ type, onClick }) {
  return (
    <button className="no-style" type="button" onClick={onClick}>
      {type === "deleteButton" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" className="DeleteButton">
          <g id="md-close-circle-outline" transform="translate(-48 -48)">
            <path
              id="Path_365"
              data-name="Path 365"
              d="M66,51.635A14.359,14.359,0,1,1,55.84,55.84,14.306,14.306,0,0,1,66,51.635M66,48A18,18,0,1,0,84,66,18,18,0,0,0,66,48Z"
              transform="translate(0 0)"
              fill="#c40080"
            />
            <path
              id="Path_366"
              data-name="Path 366"
              d="M170,167.482,167.482,170,161,163.518,154.518,170,152,167.482,158.482,161,152,154.518,154.518,152,161,158.482,167.482,152,170,154.518,163.518,161Z"
              transform="translate(-95 -95)"
              fill="#c40080"
            />
          </g>
        </svg>
      )}
      {type === "editButton" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="30.824" height="30.824" viewBox="0 0 30.824 30.824" className="EditButton">
        <path id="Path_367" data-name="Path 367" d="M63.312,48A15.412,15.412,0,1,0,78.724,63.412,15.41,15.41,0,0,0,63.312,48ZM58.066,72.415H54.317V68.666L65.372,57.61l3.749,3.749ZM72.018,58.462l-1.852,1.852-3.749-3.749,1.852-1.852a.967.967,0,0,1,1.4,0l2.349,2.349A.967.967,0,0,1,72.018,58.462Z" transform="translate(-47.9 -48)" fill="#052c51"/>
      </svg>
      
      )}
    </button>
  );
}

ActionButtons.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}