
import {LOAD_ROUTINES_LOADING, LOAD_ROUTINES, LOAD_ROUTINES_ERROR} from '../actions/commonEntityActions'

const initialState = {
    items: [],
    loading: false,
    error: ''
 };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ROUTINES_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_ROUTINES: 
           return {
               ...state,
               items: action.data,
               loading: false
           }
        case LOAD_ROUTINES_ERROR:
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
