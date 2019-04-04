import React from "react";
import PropTypes from "prop-types";

const InputButton = ({classes, buttonType, text}) => (
    <div className={`send-button-container ${classes}`}>
        <input
            type="submit"
            className={`Button ${buttonType}`}
            value={text}
        />
    </div> 
  );
  InputButton.defaultProps = {
    classes: "",
    buttonType: "button-std"
  };
  
  InputButton.propTypes = {
    classes: PropTypes.string,
    buttonType: PropTypes.string,
    text: PropTypes.string.isRequired
  }
  

export default InputButton;
