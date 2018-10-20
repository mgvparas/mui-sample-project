import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import store from './store.js';

import App from './App';

import AppTheme from './AppTheme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto';

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <MuiThemeProvider theme={AppTheme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
