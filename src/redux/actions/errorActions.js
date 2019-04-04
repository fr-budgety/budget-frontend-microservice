import {CLEAR_ERRORS} from '../actionType';

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
    payload: ''
  })
};