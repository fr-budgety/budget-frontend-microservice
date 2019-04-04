import React from 'react'
import PropTypes from 'prop-types';

const Form = ({children, classes, action}) => {
  return (
    <form onSubmit={action} className={classes ? classes : ''}>
        {children}
    </form>
  )
}

Form.propTypes = {
    children: PropTypes.array.isRequired,
    classes: PropTypes.string,
    onSubmit: PropTypes.func
}

export default Form;