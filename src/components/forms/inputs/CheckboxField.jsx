import React from "react";
import PropTypes from "prop-types";

export const CheckboxField = ({ children, error, classes, name, checked, onChange }) => (
    <div className={`CheckboxField ${classes}`}>
    <input
      className="CheckboxField-input"
      id="CheckboxField-checkbox"
      type="checkbox"
      name={name}
      checked={checked}
      onChange = {onChange}
      style={{display: "none"}}
    />
    <label className="CheckboxField-checkbox" htmlFor="CheckboxField-checkbox">
      <span>
        <svg width="12px" height="10px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </svg>
      </span>
      <span className="CheckboxField-label">{children}</span>
    </label>
    {error && <div className="Error full-width">{error}</div>}
  </div>
);

CheckboxField.defaultProps = {
  classes: "",
};

CheckboxField.propTypes = {
  children: PropTypes.array,
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default CheckboxField;
