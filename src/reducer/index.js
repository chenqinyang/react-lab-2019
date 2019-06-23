import { combineReducers } from 'redux';
import session from './session';
import func from './function';

const app = combineReducers({
  session,
  func
});

export default app;

