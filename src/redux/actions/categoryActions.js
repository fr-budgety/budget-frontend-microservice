import axios from 'axios';
import {addToastrMessage} from './toastrActions';
import {DELETE_CATEGORY, GET_CATEGORIES, ADD_CATEGORY, GET_ICONS, USER_IS_LOADING, GET_ERRORS, CLEAR_ERRORS, SET_DELETE_CATEGORY, TOGGLE_ADD_CATEGORY_MODAL} from '../actionType';


//Set category to delete before confirmation is true
export const setDeleteCategory= (_id)=> dispatch => {
  return dispatch({
    type: SET_DELETE_CATEGORY,
    payload: _id
  })
}
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

//Delete category
export const deleteCategory = (id) => dispatch => {
    dispatch(setUserLoading(true));
    axios
      .delete(`/api/categories/${id}`)
      .then( () => {
        dispatch(setUserLoading(false));
        dispatch(addToastrMessage('success','Success','The category has been deleted'))
        return dispatch({
          type: DELETE_CATEGORY,
          payload: id
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

//Add Category
export const addCategory = (categoryData) => dispatch => {
  dispatch(setUserLoading(true));
  axios
    .post('/api/categories', categoryData)
    .then( success => {
      dispatch(setUserLoading(false));
      dispatch({
        type: ADD_CATEGORY,
        payload: success.data
      })
      dispatch(toggleAddCategoryModal(false));
      dispatch(clearErrors());
      dispatch(addToastrMessage('success','Success','Category has been created!'))
    })
    .catch(err =>{
      dispatch(setUserLoading(false));
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Toggle category modal
export const toggleAddCategoryModal = (bool) => {
  if(!bool){bool = false}
  return {
    type: TOGGLE_ADD_CATEGORY_MODAL,
    payload: bool
  }
}
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