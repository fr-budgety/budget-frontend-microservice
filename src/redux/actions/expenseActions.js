import axios from 'axios';
import { addToastrMessage } from './toastrActions';
import { ADD_EXPENSE, GET_EXPENSES, USER_IS_LOADING, GET_ERRORS, CLEAR_ERRORS, DELETE_EXPENSE } from '../actionType';

//Add Account
export const addExpense = (expenseData) => dispatch => {
    dispatch(setUserLoading(true));
    axios
        .post('/api/expenses', expenseData)
        .then(success => {
            dispatch(setUserLoading(false));
            dispatch({
                type: ADD_EXPENSE,
                payload: success.data
            })
            console.log('Success Data: ', success.data)
            dispatch(clearErrors());
            dispatch(addToastrMessage('success', 'Success', 'Expense has been added.'))
        })
        .catch(err => {
            dispatch(setUserLoading(false));
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

//Get All Expenses
export const getExpenses = () => dispatch => {
    dispatch(setUserLoading(true));
    axios
        .get('/api/expenses/')
        .then(success => {
            dispatch(setUserLoading(false));
            return dispatch({
                type: GET_EXPENSES,
                payload: success.data
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


//Delete expense by id
export const deleteExpense = (expenseId) => dispatch => {
    dispatch(setUserLoading(true));
    axios
    .delete(`/api/expenses/${expenseId}`)
    .then( success => {
      dispatch(setUserLoading(false));
      dispatch(addToastrMessage('success','Success','Expense has been deleted'))
      return dispatch({
        type: DELETE_EXPENSE,
        payload: expenseId
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
    return {
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
