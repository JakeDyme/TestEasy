
import {LOAD_TESTS_LOADING, LOAD_TESTS, LOAD_TESTS_ERROR} from '../actions/commonEntityActions'

const initialState = {
    items: [],
    loading: false,
    error: ''
 };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_TESTS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_TESTS: 
           return {
               ...state,
               items: action.data,
               loading: false
           }
        case LOAD_TESTS_ERROR:
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
