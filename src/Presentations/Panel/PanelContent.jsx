import React, { Children } from 'react';

import Grid from '@material-ui/core/Grid';

const GridItem = (props) => {
    return (
        <Grid item xs={12}>
            {props.children}
        </Grid>
    );
};

const PanelContent = (props) => {
    return (
        <div className='panel-content'>
            <Grid container spacing={8}>
                {Children.map(props.children, (child, i) => (
                    <GridItem>{child}</GridItem>
                ))}
            </Grid>
        </div>
    );
};

export default PanelContent;