import React from "react";
import PropTypes from "prop-types";

const Button = ({classes, buttonType, text, action}) => (
    <div className={`${classes}`}>
        <input
            type="button"
            className={`Button ${buttonType}`}
            value={text}
            onClick={action}
        />
    </div> 
  );
  Button.defaultProps = {
    classes: "",
    buttonType: "button-std"
  };
  
  Button.propTypes = {
    classes: PropTypes.string,
    buttonType: PropTypes.string,
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }
  

export default Button;
