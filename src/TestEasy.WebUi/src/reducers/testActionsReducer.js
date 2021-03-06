
import {LOAD_ACTIONS_LOADING, LOAD_ACTIONS, LOAD_ACTIONS_ERROR} from '../actions/commonEntityActions'

const initialState = {
    items: [],
    loading: false,
    error: ''
 };

export default (state = initialState, action) => {
    switch(action.type){
        case LOAD_ACTIONS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_ACTIONS: 
           return {
               ...state,
               items: action.data,
               loading: false
           }
        case LOAD_ACTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    }
}
