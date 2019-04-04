import React from 'react';
import PropTypes from 'prop-types';

const Title = ({variant, color, children, className}) => {
  return (
    <React.Fragment>
      {variant==='h1' && <h1 className={`${color} ${className}`}>{children}</h1>}    
      {variant==='h2' && <h2 className={`${color} ${className}`}>{children}</h2>}    
      {variant==='h3' && <h3 className={`${color} ${className}`}>{children}</h3>}    
      {variant==='h4' && <h4 className={`${color} ${className}`}>{children}</h4>}    
      {variant==='h5' && <h5 className={`${color} ${className}`}>{children}</h5>}    
      {variant==='globalActions' && <span className={`globalActions ${color} ${className}`}>{children}</span>}    
      {variant==='dashboardTitle' && <span className={`dashboardTitle ${color} ${className}`}>{children}</span>}    
    </React.Fragment>
  )
}

Title.defaultProps = {
  variant: 'h1',
  color: 'standard',
  children: '',
  className: ''
}
Title.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string
}

export default Title;