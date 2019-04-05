import axios from 'axios';
import {addToastrMessage} from './toastrActions';
import {DELETE_CATEGORY, GET_CATEGORIES, ADD_CATEGORY, GET_ICONS, USER_IS_LOADING, GET_ERRORS, CLEAR_ERRORS} from '../actionType';

//Get All Categories
export const getCategories = (catType) => dispatch => {
    dispatch(setUserLoading(true));
    axios
      .get('/api/categories/')
      .then( success => {
        dispatch(setUserLoading(false));
        return dispatch({
          type: GET_CATEGORIES,
          payload: filterCats(success.data, catType)
        })
      })
      .catch(err => {
        dispatch(setUserLoading(false));
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    });
  };


/**
 * SET LOADING STATE
 */
export const setUserLoading = (isLoading) => {
  return {
    type: USER_IS_LOADING,
    payload: isLoading
  }
}
 /**
  * SET ERRORS STATE
  */
 export const getErrors = (errors) => {
   return{
     type: GET_ERRORS,
     payload: errors
   }
 }

 /**
  * CLEAR ERROR FROM STATE
  */
 export const clearErrors = () => {
   return {
     type: CLEAR_ERRORS
   }
 }

/**
 * Filter categories and return an array with filtered categories
 * @param {object} data 
 * @param {string} catType 
 */
export const filterCats = (data, catType) => {
    const categoriesArr = data;
    let filteredCategories = [];
    if (catType){
        filteredCategories = categoriesArr.filter(category => (category.type === catType))
        return filteredCategories;
    } else {
        return data
    }
}