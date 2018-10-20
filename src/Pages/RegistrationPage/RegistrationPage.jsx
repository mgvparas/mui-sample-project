import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import RegistrationPanel from '../../Presentations/RegistrationPanel/RegistrationPanel.jsx';

import { withStyles } from '@material-ui/core/styles';

const styles = (props) => ({
  registrationPage: { height: 'inherit' },
  registrationPanelContainer: { height: 'inherit' }
});

const RegistrationPage = (props) => {
  const { classes } = props;

  return (
    <div className={`${classes.registrationPage} registration-page`}>
      <Backdrop open />
      <Grid className={classes.registrationPanelContainer} container justify='center' alignItems='center'>
        <Grid item>
          <RegistrationPanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(RegistrationPage);