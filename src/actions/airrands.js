/* eslint-disable import/prefer-default-export */

import { SET_AIR_RANDS, SET_IS_OPEN } from '../constants';

export function setAirRands({ name, list }) {
  console.log('in the reducer', JSON.stringify(list));
  return {
    type: SET_AIR_RANDS,
    payload: Object.assign({
      name,
      list,
    }),
  };
}

export function setIsOpen({ name, isOpen }) {
  console.log('in the reducer', JSON.stringify(isOpen));
  return {
    type: SET_IS_OPEN,
    payload: Object.assign({
      name,
      isOpen,
    }),
  };
}
