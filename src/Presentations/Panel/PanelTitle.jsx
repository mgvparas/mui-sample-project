import React from 'react';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const PanelTitleStyles = (theme) => {
    return {
        title: {
            paddingBottom: `${theme.spacing.unit * 2}px`
        }
    }
}

const PanelTitle = (props) => {
    const { children, classes } = props;

    return (
        <div className={`panel-title ${classes.title}`}>
            <Typography variant='title'>
                {children}
            </Typography>
        </div>
    );
};

export default withStyles(PanelTitleStyles)(PanelTitle);