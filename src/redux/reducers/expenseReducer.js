import { ADD_EXPENSE, GET_EXPENSES, DELETE_EXPENSE } from '../actionType';

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
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expenses => expenses._id !== action.payload)
        }

        default:
            return state;
    }
}