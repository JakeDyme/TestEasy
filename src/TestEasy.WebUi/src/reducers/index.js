import { combineReducers } from 'redux';
// Reducers...
import counterReducer from './counter';
import testActionsReducer from './testActions';

const testsReducer = (state = [], data) => {
    switch(data.type){
        case 'SET_TESTS': 
            return state = data.payload;
        default: 
            return state;
    }
}

const routinesReducer = (state = [], data) => {
    switch(data.type){
        case 'SET_ROUTINES': 
            return state = data.payload;
        default: 
            return state;
    }
}

const setupsReducer = (state = [], data) => {
    switch(data.type){
        case 'SET_SETUPS': 
            return state = data.payload;
        default: 
            return state;
    }
}

const allReducers = combineReducers({
    counter: counterReducer,
    tests: testsReducer,
    setups: setupsReducer,
    routines: routinesReducer,
    testActions: testActionsReducer,
})

export default allReducers;