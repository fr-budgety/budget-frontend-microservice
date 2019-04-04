import {TOGGLE_SIDEBAR, SET_CURRENT_PAGE} from '../actionType';

export const toggleSidebar = ()=>{
    return {
        type: TOGGLE_SIDEBAR
    }
}
export const setCurrentPage = (page)=>{
    return{
        type: SET_CURRENT_PAGE,
        payload: page
    }
}