import axios from 'axios';
import {setUserLoading, getErrors, clearErrors} from './commonActions';
import {GET_ICONS} from '../actionType';

//Get All icons
export const getIcons = () => dispatch => {
    dispatch(clearErrors());
    dispatch(setUserLoading(true));
    axios.get('/api/icons').then(icons => {
        dispatch(setUserLoading(false));
        dispatch({
            type: GET_ICONS,
            payload: icons.data
        })
    }).catch(err=>{
        dispatch(setUserLoading(false));
        dispatch(getErrors(err.response.data));
    })
}
