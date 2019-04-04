import axios from 'axios';
import setAuthToken from '../../util/setAuthToken';
import jwt_decode from 'jwt-decode';
import {addToastrMessage} from './toastrActions';
import {GET_ERRORS,SET_CURRENT_USER,USER_IS_LOADING, CLEAR_ERRORS, SET_CURRENT_DECODED} from '../actionType';

/**
 * REGISTER USER
 */
export const registerUser = (userData, history) => dispatch =>{
  dispatch(setUserLoading(true));
  axios.post('/api/users/register', userData)
    .then(()=>{
      dispatch(setUserLoading(false));
      history.push('/login');
      dispatch(addToastrMessage('success','Success','You are registered and you can now log-in!'));
    })
    .catch(err=>{
      dispatch(setUserLoading(false));
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      }
    )
}

/**
 * LOGIN USER
 */
export const loginUser = (userData,history) => dispatch =>{
  dispatch(setUserLoading(true));
  axios.post('/api/users/login', userData)
    .then(result=>{
       dispatch(clearErrors());
       dispatch(setUserLoading(false));
       const { token } = result.data;
       localStorage.setItem('jwtToken', token);
       setAuthToken(token);
       const decoded = jwt_decode(token);
       dispatch(setCurrentUser(decoded));
       dispatch(addToastrMessage('success','Success','You are now logged in!'));
       history.push('/dashboard');

    })
    .catch(err => {
      dispatch(clearErrors());
      dispatch(setUserLoading(false));
      dispatch(getErrors(err.response.data))
    });
}

// Set user log out
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
}

// Get current user email
export const getCurrentUser = (userId) => dispatch => { axios.get('/api/users/current', userId).then(result=>{
  dispatch(setCurrentEmail(result))
}).catch(err=>console.log(err))}


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
 * SET CURRENT USER
 */
export const setCurrentUser = (decoded)  => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
/**
 * SET CURRENT EMAIL
 */
export const setCurrentEmail = (decoded) =>{
  return{
    type: SET_CURRENT_DECODED,
    payload: decoded.data.email
  }
}