import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import accountReducer from './reducers/accountReducer';
import categoryReducer from './reducers/categoryReducer';
import errorsReducer from './reducers/errorReducer';
import toastrManagedReducer from './reducers/toastrReducer';
import layoutReducer from './reducers/layoutReducer';
import iconReducer from './reducers/iconReducer';
import expenseReducer from './reducers/expenseReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
	auth: authReducer,
	accounts: accountReducer,
	categories: categoryReducer,
	errors: errorsReducer,
	toastr: toastrReducer,
	message: toastrManagedReducer,
	layout: layoutReducer,
	icons: iconReducer,
	expenses: expenseReducer,
});