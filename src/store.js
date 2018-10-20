import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import SiteNavReducer from './Containers/SiteNav/SiteNavReducer.js'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const reducer = combineReducers({
  form: reduxFormReducer, //mounted under "form",
  siteNav: SiteNavReducer
});

const store = createStore(
  reducer,
  // applyMiddleware() tells createStore() how to handle middleware
  applyMiddleware(logger)
)

export default store;