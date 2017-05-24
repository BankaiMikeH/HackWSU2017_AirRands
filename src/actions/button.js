/* eslint-disable import/prefer-default-export */

import { SET_IS_OPEN } from '../constants';

export function setButtonVisibility({ name, isOpen }) {
  console.log('in the reducer', `name: ${name} list: ${isOpen}`);
  return {
    type: SET_IS_OPEN,
    payload: Object.assign({
      name,
      isOpen,
    }),
  };
}
