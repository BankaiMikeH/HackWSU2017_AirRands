/* eslint-disable import/prefer-default-export */

import { SET_AIR_RANDS } from '../constants';

export function setAirRands({ name, list }) {
  console.log('in the reducer', `name: ${name} list: ${list}`);
  return {
    type: SET_AIR_RANDS,
    payload: Object.assign({
      name,
      list,
    }),
  };
}
