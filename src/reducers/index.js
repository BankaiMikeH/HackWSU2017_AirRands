import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import {reducer as burgerMenu} from 'redux-burger-menu';

export default combineReducers({
  user,
  runtime,
  burgerMenu,
});
