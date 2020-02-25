
import {LOAD_ENTITIES_LOADING, LOAD_ENTITIES, LOAD_ENTITIES_ERROR} from '../actions/commonEntityActions'

const initialState = {
    items: [],
    loading: false,
    error: ''
 };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ENTITIES_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_ENTITIES: 
           return {
               ...state,
               items: action.data,
               loading: false
           }
        case LOAD_ENTITIES_ERROR:
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
