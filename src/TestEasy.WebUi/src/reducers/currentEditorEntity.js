
import {LOAD_CURRENT_EDITOR_ENTITY_LOADING, LOAD_CURRENT_EDITOR_ENTITY, LOAD_CURRENT_EDITOR_ENTITY_ERROR} from '../actions/commonEntityActions'

const initialState = {
    name: null,
    fields: [],
    actions: [],
    loading: false,
    error: ''
 };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_CURRENT_EDITOR_ENTITY_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }
        case LOAD_CURRENT_EDITOR_ENTITY: 
           return {
               ...state,
               items: action.data,
               loading: false
           }
        case LOAD_CURRENT_EDITOR_ENTITY_ERROR:
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
