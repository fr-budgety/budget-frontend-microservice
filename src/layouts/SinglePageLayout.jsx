import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { Hidden } from "@material-ui/core";

const RegistrationPage = ({children, classes}) => (  
      <Grid container>
        <Hidden smDown>
        <Grid item xs={12} md={6} className="full-height gradient-background">
          <Grid item xs={12} className="full-height image-background" />
        </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <div className={`center-middle margin-top-mobile ${classes}`}>
            {children}
          </div>
        </Grid>
      </Grid>
)

RegistrationPage.propTypes  = {
  children: PropTypes.array.isRequired,
  classes: PropTypes.string
}

export default RegistrationPage;

