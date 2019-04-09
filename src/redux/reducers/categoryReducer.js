import {DELETE_CATEGORY, GET_CATEGORIES, ADD_CATEGORY, GET_ICONS, SET_DELETE_CATEGORY} from '../actionType';

const initialState = {
    singleCategory: {},
    deleteCategory: '',
    categories: [],
  }

  export default function(state = initialState, action){
    switch(action.type){
      case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter (category=>category._id !== action.payload)
      }
      case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      case SET_DELETE_CATEGORY: 
      return {
        ...state,
        deleteCategory: action.payload
      }
      case ADD_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      }
      case GET_ICONS:
      return {
        ...state,
        icons: action.payload
      }
      default:
        return state;
    }
  }