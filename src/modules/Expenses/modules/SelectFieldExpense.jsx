import React from "react";
import PropTypes from "prop-types";

export const SelectFieldExpense = ({ classes, error, children, options, name, value, onChange, defaultOption }) => (
  <div className="Field">
    <div className={`SelectField ${classes}`}>
      <label>
        {children}
        <select value={value} onChange={onChange} name={name}>
        {defaultOption && <option value="">{defaultOption}</option>}
        {options.map(option=>(
            <option value={option.name}>{option.name}</option>
        ))}
        </select>
      </label>
    </div>
    
    {error && <div className="Error full-width">{error}</div>}
    </div>
);

SelectFieldExpense.defaultProps = {
  classes: "",
  type: "input"
};

SelectFieldExpense.propTypes = {
  children: PropTypes.string,
  mapParam: PropTypes.object,
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectFieldExpense;
