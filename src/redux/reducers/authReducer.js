import {USER_IS_LOADING, SET_CURRENT_USER, SET_CURRENT_DECODED} from '../actionType';
import _ from 'lodash';
const initialState = {
  isAuthenticated : false,
  isLoading: false,
  userEmail: {},
  user: {}
}

export default function(state = initialState, action){
  switch(action.type){
   case USER_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload
    }
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        user: action.payload
      }
    case SET_CURRENT_DECODED:
      return{
        ...state,
        userEmail: action.payload
      }
    default:
      return state;
  }
}