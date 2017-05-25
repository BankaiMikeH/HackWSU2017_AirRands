import { SET_AIR_RANDS, SET_IS_OPEN } from '../constants';

export default function airrands(state = {}, action) {
  switch (action.type) {

    // case SET_AIR_RANDS:
    //   return Object.assign({}, state, { list: action.payload.list });
    // default:
    //   return state;

    case SET_AIR_RANDS:
      return { ...state, list: action.payload.list };
    case SET_IS_OPEN:
      return { ...state, isOpen: action.payload.isOpen };
    default:
      return state;
  }
}
