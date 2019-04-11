import { DELETE_CATEGORY, GET_CATEGORIES, EDIT_CATEGORY, ADD_CATEGORY, GET_ICONS, SET_DELETE_CATEGORY, TOGGLE_ADD_CATEGORY_MODAL, TOGGLE_EDIT_CATEGORY_MODAL } from '../actionType';

const initialState = {
  singleCategory: {},
  deleteCategory: '',
  editCategory: '',
  categories: [],
  addCategoryModalIsOpen: false,
  editCategoryModalIsOpen: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category._id !== action.payload)
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
    case TOGGLE_ADD_CATEGORY_MODAL:
      return {
        ...state,
        addCategoryModalIsOpen: action.payload
      }
    case EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category._id === action.payload._id) {
            return action.payload
          }
          return category;
        })
      }
    case TOGGLE_EDIT_CATEGORY_MODAL:
      return {
        ...state,
        editCategory: state.categories.filter(category => category._id === action.payload.category),
        editCategoryModalIsOpen: action.payload.toggle
      }
    default:
      return state;
  }
}