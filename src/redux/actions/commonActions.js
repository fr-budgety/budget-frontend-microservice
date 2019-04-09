import {USER_IS_LOADING, GET_ERRORS, CLEAR_ERRORS} from '../actionType';

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