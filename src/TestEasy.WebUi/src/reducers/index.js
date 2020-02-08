import { combineReducers } from 'redux';
// Reducers...
import testActionsReducer from './testActionsReducer';

const testsReducer = (state = [], actionObject) => {
    switch(actionObject.type){
        case 'SET_TESTS': return state = actionObject.payload;
        default: return state;
    }
}

const routinesReducer = (state = [], actionObject) => {
    switch(actionObject.type){
        case 'SET_ROUTINES': return state = actionObject.payload;
        default: return state;
    }
}

const setupsReducer = (state = [], actionObject) => {
    switch(actionObject.type){
        case 'SET_SETUPS': return state = actionObject.payload;
        default: return state;
    }
}

const fetchingActionsReducer = (state = false, actionObject) => {
    switch(actionObject.type){
        case 'SET_FETCHING_ACTIONS': return state = actionObject.payload;
        default: return state;
    }
}

const allReducers = combineReducers({
    tests: testsReducer,
    setups: setupsReducer,
    routines: routinesReducer,
    testActions: testActionsReducer,
    fetchingActions: fetchingActionsReducer,
})

export default allReducers;
