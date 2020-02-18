import { combineReducers } from 'redux';
// Reducers...
import testActionsReducer from './testActionsReducer';
import testsReducer from './testsReducer';
import routinesReducer from './routinesReducer';
import setupsReducer from './setupsReducer';
import sectionTypeEnum from '../enums/sectionTypeEnum'

const initialState = {
    testActions: [],
    tests: [],
    setups: [],
    routines: [],
    currentSectionType: sectionTypeEnum.TEST,
    currentEntity: null,
 };

const currentEditorEntityReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_ENTITY': return state.currentEntity = action.payload;
        default: return state;
    }
}

const currentSectionTypeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_SECTION_TYPE': return state.currentSectionType = action.payload;
        default: return state;
    }
}

const allReducers = combineReducers({
    testActions: testActionsReducer,
    tests: testsReducer,
    setups: setupsReducer,
    routines: routinesReducer
})

export default allReducers;
