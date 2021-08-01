import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
import modelReducer from './modelReducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer,
  models: modelReducer
});
