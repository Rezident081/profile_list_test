import { combineReducers } from 'redux'
import profileReducer from './profiles';
import userReducer from './user';

export default combineReducers({
  profiles : profileReducer,
  user: userReducer
});