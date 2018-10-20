import React, { Children } from 'react';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const PanelStyles = (theme) => {
    return {
        paper: {
            padding: `${theme.spacing.unit * 2}px`
        }
    }
}

const Panel = (props) => {
    const { children, classes } = props;

    return (
        <div className='panel'>
            <Paper className={classes.paper}>
                <Grid container direction='column' justify='center' alignItems='center'>
                    {Children.map(children, (child, i) => (
                        <Grid item>{child}</Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
};

export default withStyles(PanelStyles)(Panel);