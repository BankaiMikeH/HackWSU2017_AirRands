import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import user from './user';
import runtime from './runtime';
import airrands from './airrands';
import button from './button';


export default combineReducers({
  user,
  runtime,
  burgerMenu,
  airrands,
  button,
});
