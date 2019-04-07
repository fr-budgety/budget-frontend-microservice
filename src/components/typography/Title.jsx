import React from 'react';
import PropTypes from 'prop-types';

const Title = ({variant, color, children, className, action}) => {
  return (
    <React.Fragment>
      {variant==='h1' && <h1 className={`${color} ${className}`}  onClick={action!== null ? action : null}>{children}</h1>}    
      {variant==='h2' && <h2 className={`${color} ${className}`}  onClick={action!== null ? action : null}>{children}</h2>}    
      {variant==='h3' && <h3 className={`${color} ${className}`}  onClick={action!== null ? action : null}>{children}</h3>}    
      {variant==='h4' && <h4 className={`${color} ${className}`}  onClick={action!== null ? action : null}>{children}</h4>}    
      {variant==='h5' && <h5 className={`${color} ${className}`}  onClick={action!== null ? action : null}>{children}</h5>}    
      {variant==='globalActions' && <span className={`globalActions ${color} ${className}`}  onClick={action!== null ? action : null} >{children}</span>}    
      {variant==='dashboardTitle' && <span className={`dashboardTitle ${color} ${className}`} onClick={action!== null ? action : null}>{children}</span>}    
    </React.Fragment>
  )
}

Title.defaultProps = {
  variant: 'h1',
  color: 'standard',
  children: '',
  className: '',
  action:null
}
Title.propTypes = {
  action: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string
}

export default Title;