import React from 'react';

import DataTable from '../../Presentations/DataTable/DataTable.jsx';
import DataTableToolbar from '../../Presentations/DataTable/DataTableToolbar.jsx';
import SiteHeader from '../../Containers/SiteHeader/SiteHeader.jsx';
import SiteNav from '../../Containers/SiteNav/SiteNav.jsx';

import HomePageStyles from './HomePageStyles.js';
import { withStyles } from '@material-ui/core/styles';

const HomePage = (props) => {
  const { classes } = props;

  return (
    <div className={`${classes.homePage} home-page`}>
      <div className={classes.navContainer}>
        <SiteNav />
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.headerContainer}>
          <SiteHeader />
        </div>
        <div className={classes.contentContainer}>
          <DataTableToolbar />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default withStyles(HomePageStyles)(HomePage);