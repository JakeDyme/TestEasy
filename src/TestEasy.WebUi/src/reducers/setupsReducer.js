
import {LOAD_SETUPS_LOADING, LOAD_SETUPS, LOAD_SETUPS_ERROR} from '../actions/commonEntityActions'

const initialState = {
    items: [],
    loading: false,
    error: ''
 };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_SETUPS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_SETUPS: 
           return {
               ...state,
               items: action.data,
               loading: false
           }
        case LOAD_SETUPS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    }
}

export default reducer;
