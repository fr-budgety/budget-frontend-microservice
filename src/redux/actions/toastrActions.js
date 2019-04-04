import {ADD_TOASTR_MESSAGE, REMOVE_TOASTR_MESSAGE} from '../actionType';

export const addToastrMessage = (type,title, message) =>  {
    const toastr = {title, message, type};
    return{
        type: ADD_TOASTR_MESSAGE,
        payload: toastr
    }
}

export const removeToastrMessage = () => {
    return{
        type: REMOVE_TOASTR_MESSAGE,
        payload: {}
    }
}