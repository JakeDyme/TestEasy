import { combineReducers } from 'redux';
// Reducers...
import testActionsReducer from './testActionsReducer';
import testsReducer from './testsReducer';
import routinesReducer from './routinesReducer';
import setupsReducer from './setupsReducer';
import currentEntityItemsReducer from './currentEntityItemsReducer';
import SectionTypeEnum from '../enums/SectionTypeEnum'

const initialState = {
    testActions: [],
    tests: [],
    setups: [],
    routines: [],
    currentSectionType: SectionTypeEnum.ACTIONS,
    currentEntityItems: [],
    currentEditorEntity: null,
};

const currentSectionTypeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_SECTION_TYPE': return action.payload
        default: return SectionTypeEnum.ACTIONS;
    }
};

const currentEditorEntityReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_EDITOR_ENTITY': return action.payload;
        default: return null;
    }
};

// const currentEntityItemsReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'SET_CURRENT_ENTITY_ITEMS': return action.payload;
//         default: return [];
//     }
// };

const allReducers = combineReducers({
    testActions: testActionsReducer,
    tests: testsReducer,
    setups: setupsReducer,
    routines: routinesReducer,
    currentSectionType: currentSectionTypeReducer,
    currentEntityItems: currentEntityItemsReducer, 
    currentEditorEntity: currentEditorEntityReducer
});

export default allReducers;
