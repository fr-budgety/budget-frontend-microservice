import { ADD_EXPENSE, GET_EXPENSES } from '../actionType';

const initialState = {
    expenses: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EXPENSES:
            return {
                ...state,
                expenses: action.payload
            }
        
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.concat(action.payload)
            }

        default:
            return state;
    }
}