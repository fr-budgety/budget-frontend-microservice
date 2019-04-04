import axios from 'axios';
import {addToastrMessage} from './toastrActions';
import {GET_ACCOUNTS, GET_ACCOUNT, EDIT_ACCOUNT, DELETE_ACCOUNT, USER_IS_LOADING, GET_ERRORS, CLEAR_ERRORS, ADD_ACCOUNT} from '../actionType';

//Get All Accounts
export const getAccounts = () => dispatch => {
    dispatch(setUserLoading(true));
    axios
      .get('/api/accounts/')
      .then( success => {   
        dispatch(setUserLoading(false));
        return dispatch({
          type: GET_ACCOUNTS,
          payload: success.data
        })
      })
      .catch(err =>{
        dispatch(setUserLoading(false));
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    });
  };

//Delete account
// Delete Account by id
export const deleteAccount = (accountId) => dispatch => {
  dispatch(setUserLoading(true));
  axios
  .delete(`/api/accounts/${accountId}`)
  .then( success => {
    dispatch(setUserLoading(false));
    dispatch(addToastrMessage('success','Success','Account as been deleted'))
    return dispatch({
      type: DELETE_ACCOUNT,
      payload: accountId
    })
  })
  .catch(err =>{
    dispatch(setUserLoading(false));
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  });
};

//Add Account
export const addAccount = (accountData) => dispatch => {
  dispatch(setUserLoading(true));
  axios
    .post('/api/accounts/add/account', accountData)
    .then( success => {
      dispatch(setUserLoading(false));
      dispatch({
        type: ADD_ACCOUNT,
        payload: success.data
      })
      console.log('Success Data: ', success.data)
      dispatch(clearErrors());
      dispatch(addToastrMessage('success','Success','Account as been created!'))
    })
    .catch(err =>{
      dispatch(setUserLoading(false));
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Edit Account
export const editAccount = (accountData) => dispatch => {
  const {id} = accountData;
  axios.post(`/api/accounts/edit/account/${id}`, accountData)
  .then (success => {
    dispatch(setUserLoading(false));
    return dispatch({
      type: EDIT_ACCOUNT,
      payload: success.data
    })
  }).catch(err =>{
    dispatch(setUserLoading(false));
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  });
};


//Get Single Account
export const getAccount = (id) => dispatch => {
  dispatch(setUserLoading(true));
  axios
  .get(`/api/accounts/${id}`)
  .then( success => {
    dispatch(setUserLoading(false));
    return dispatch({
      type: GET_ACCOUNT,
      payload: success.data
    })
  })
  .catch(err =>{
    dispatch(setUserLoading(false));
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  });
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