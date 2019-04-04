import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import accountReducer from './reducers/accountReducer';
import errorsReducer from './reducers/errorReducer';
import toastrManagedReducer from './reducers/toastrReducer';
import layoutReducer from './reducers/layoutReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';


export default combineReducers({
 auth: authReducer,
 accounts: accountReducer,
 errors: errorsReducer,
 toastr: toastrReducer,
 message: toastrManagedReducer,
 layout: layoutReducer
});