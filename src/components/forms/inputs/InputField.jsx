import React from "react";
import PropTypes from "prop-types";

export const InputField = ({ classes, error, type, name, value, onChange, placeholder }) => (
  <div className="Field">
    <div className={`InputField ${classes}`}>
      <input
        className={error ? "full-width effect InputField--error" : "full-width effect"}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
      <span className="focus-border" />
    </div>
    {error && <div className="Error full-width">{error}</div>}
    </div>
);

InputField.defaultProps = {
  classes: "",
  type: "input"
};

InputField.propTypes = {
  classes: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default InputField;
