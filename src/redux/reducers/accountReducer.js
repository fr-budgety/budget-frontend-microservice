import {GET_ACCOUNTS, GET_ACCOUNT, EDIT_ACCOUNT, DELETE_ACCOUNT, ADD_ACCOUNT} from '../actionType';

const initialState = {
    accounts: [],
    singleAccount: {},
    singleAccountCategoriesExpenses: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(account => account._id !== action.payload)
            }
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        case ADD_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.concat(action.payload)
            }
        case EDIT_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.map( account => {
                    if(account._id === action.payload._id){
                        return action.payload
                    }
                    return account;
                })
            }
        case GET_ACCOUNT:
            return {
                ...state,
                singleAccount: action.payload
            }

        default:
            return state;
    }
}