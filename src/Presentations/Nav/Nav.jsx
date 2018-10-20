import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import DateRangeIcon from '@material-ui/icons/DateRange';
import FolderIcon from '@material-ui/icons/Folder';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import NavStyles from './NavStyles.js';
import { withStyles } from '@material-ui/core/styles';

const Nav = (props) => {
  const { classes, isOpen } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: isOpen ? classes.drawerPaper : classes.drawerPaperClose,
        }}
        open={isOpen}
      >
        <AppBar position='static'>
          <Toolbar>
            <ListItemIcon>
              <FormatShapesIcon className={classes.logo} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="title" className={classes.title}>
                ASDF Soft
              </Typography>
            </ListItemText>
          </Toolbar>
        </AppBar>
        <List component='nav'>
          <ListItem button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary='Documents' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary='Applications' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText primary='Appointments' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

Nav.propTypes = {
  //Required Props
  isOpen: PropTypes.bool.isRequired

  //Optional Props
  
};

export default withStyles(NavStyles)(Nav);