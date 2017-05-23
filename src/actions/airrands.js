/* eslint-disable import/prefer-default-export */

import { SET_AIR_RANDS } from '../constants';

export function setAirRands({ name, value }) {
   console.log("in the reducer", name);
  return {
    type: SET_AIR_RANDS,
    payload: {
      name,
      value,
    },
  };
}
