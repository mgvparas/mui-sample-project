import React, { Children } from 'react';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

const PanelActionsStyles = (theme) => {
    return {
        actions: {
            paddingTop: `${theme.spacing.unit * 2}px`
        }
    }
}

const GridItem = (props) => {
    return (
        <Grid item>
            {props.children}
        </Grid>
    );
};

const PanelActions = (props) => {
    const { classes } = props;

    return (
        <div className={`panel-actions ${classes.actions}`}>
            <Grid container justify='flex-end'>
                {Children.map(props.children, (child, i) => (
                    <GridItem>{child}</GridItem>
                ))}
            </Grid>
        </div>
    );
};

export default withStyles(PanelActionsStyles)(PanelActions);