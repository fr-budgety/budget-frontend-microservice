import React from 'react';
import PropTypes from 'prop-types';

const SpecialText = ({variant, color, children, className}) => {
  return (
    <React.Fragment>
      {variant==='balanceAmount' && <span className={`balanceAmount ${color} ${className}`}>{children}</span>}    
    </React.Fragment>
  )
}

SpecialText.defaultProps = {
  variant: 'h1',
  color: 'standard',
  children: '',
  className: ''
}
SpecialText.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string
}

export default SpecialText;