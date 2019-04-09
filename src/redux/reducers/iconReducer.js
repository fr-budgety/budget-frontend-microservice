import {GET_ICONS} from '../actionType';

const initialState = []

  export default function(state = initialState, action){
    switch(action.type){
      case GET_ICONS:
      return {
        ...state,
        icons: action.payload
      }
      default:
        return state;
    }
  }