import {ADD_TOASTR_MESSAGE, REMOVE_TOASTR_MESSAGE} from '../actionType';
const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
      case ADD_TOASTR_MESSAGE:
        return action.payload;
      case REMOVE_TOASTR_MESSAGE:
        return {}
      default:
        return state;
    }
}