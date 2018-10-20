import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import LoginPanel from '../../Presentations/LoginPanel/LoginPanel.jsx';

import { withStyles } from '@material-ui/core/styles';

const styles = (props) => ({
  loginPage: { height: 'inherit' },
  loginPanelContainer: { height: 'inherit' }
});

const LoginPage = (props) => {
  const { classes } = props;

  return (
    <div className={`${classes.loginPage} login-page`}>
      <Backdrop open />
      <Grid className={classes.loginPanelContainer} container justify='center' alignItems='center'>
        <Grid item>
          <LoginPanel />
        </Grid>
      </Grid>
    </div>
  )
};

export default withStyles(styles)(LoginPage);