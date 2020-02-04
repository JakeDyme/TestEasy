import { combineReducers } from 'redux';
// Reducers...
import counterReducer from './counter';
import testActionsReducer from './testActions';

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
    counter: counterReducer,
    tests: testsReducer,
    setups: setupsReducer,
    routines: routinesReducer,
    testActions: testActionsReducer,
    fetchingActions: fetchingActionsReducer
})

export default allReducers;

//export const getActions = state => state.testActions;