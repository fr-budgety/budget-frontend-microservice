import {
  TOGGLE_SIDEBAR,
  SET_CURRENT_PAGE
} from '../actionType';
const initialState = {
  sidebarIsClosed: false,
  currentPage: 'dasboard'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarIsClosed: !state.sidebarIsClosed
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state;
  }
}