import { SET_IS_OPEN } from '../constants';

export default function button(state = {}, action) {
  console.log("in the reducer");
  switch (action.type) {

    case SET_IS_OPEN:
      return Object.assign({}, state, { isOpen: action.payload.isOpen });
    default:
      return state;
  }
}
