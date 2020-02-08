
import {LOAD_ACTIONS_LOADING, LOAD_ACTIONS_SUCCESS, LOAD_ACTIONS_ERROR} from '../actions/testActionsAction'


const initialState = {
    items: [],
    loading: false,
    error: ''
 };

const testActionsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ACTIONS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_ACTIONS_SUCCESS: 
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

export default testActionsReducer;
