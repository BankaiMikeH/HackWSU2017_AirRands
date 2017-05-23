import { SET_AIR_RANDS } from '../constants';

export default function airrands(state = {}, action) {
  console.log("in the reducer");
  switch (action.type) {

    case SET_AIR_RANDS:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
