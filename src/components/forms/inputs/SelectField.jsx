import React from "react";
import PropTypes from "prop-types";

export const SelectField = ({ classes, error, children,options, name, value, onChange, }) => (
  <div className="Field">
    <div className={`SelectField ${classes}`}>
      <label>
        {children}
        <select value={value} onChange={onChange} name={name}>
        {options.map(option=>(
            <option value={option}>{option}</option>
        ))}
        </select>
      </label>
    </div>
    
    {error && <div className="Error full-width">{error}</div>}
    </div>
);

SelectField.defaultProps = {
  classes: "",
  type: "input"
};

SelectField.propTypes = {
  children: PropTypes.string,
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectField;
