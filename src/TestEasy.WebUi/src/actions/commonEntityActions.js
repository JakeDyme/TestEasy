import { getDataFromApi } from "../services/apiService"
import sectionTypeEnum from '../enums/sectionTypeEnum'

export const LOAD_TESTS = 'LOAD_TESTS';
export const LOAD_TESTS_LOADING = 'LOAD_TESTS_LOADING';
export const LOAD_TESTS_ERROR = 'LOAD_TESTS_ERROR';

export const LOAD_SETUPS = 'LOAD_SETUPS';
export const LOAD_SETUPS_LOADING = 'LOAD_SETUPS_LOADING';
export const LOAD_SETUPS_ERROR = 'LOAD_SETUPS_ERROR';

export const LOAD_ROUTINES = 'LOAD_ROUTINES';
export const LOAD_ROUTINES_LOADING = 'LOAD_ROUTINES_LOADING';
export const LOAD_ROUTINES_ERROR = 'LOAD_ROUTINES_ERROR';

export const LOAD_ACTIONS = 'LOAD_ACTIONS';
export const LOAD_ACTIONS_LOADING = 'LOAD_ACTIONS_LOADING';
export const LOAD_ACTIONS_ERROR = 'LOAD_ACTIONS_ERROR';

function getAllEndpointMapping(sectionTypeEnumValue){
    switch (sectionTypeEnumValue) {
        case sectionTypeEnum.TESTS: return { 
            method: 'GET', 
            url: 'view/tests', 
            getActionType: LOAD_TESTS, 
            loadingActionType: LOAD_TESTS_LOADING, 
            errorActionType: LOAD_TESTS_ERROR  
        };
        case sectionTypeEnum.SETUPS: return { 
            method: 'GET', 
            url: 'view/setups', 
            getActionType: LOAD_SETUPS, 
            loadingActionType: LOAD_SETUPS_LOADING, 
            errorActionType: LOAD_SETUPS_ERROR 
        };
        case sectionTypeEnum.ROUTINES: return { 
            method: 'GET', 
            url: 'view/routines', 
            getActionType: LOAD_ROUTINES, 
            loadingActionType: LOAD_ROUTINES_LOADING, 
            errorActionType: LOAD_ROUTINES_ERROR 
        };
        case sectionTypeEnum.ACTIONS: return { 
            method: 'GET', 
            url: 'view/actions', 
            getActionType: LOAD_ACTIONS, 
            loadingActionType: LOAD_ACTIONS_LOADING, 
            errorActionType: LOAD_ACTIONS_ERROR 
        };
        default: return null;
    }
}

function getByIdEndpointMapping(sectionTypeEnumValue){
    switch (sectionTypeEnumValue) {
        case sectionTypeEnum.TESTS: return { 
            method: 'GET', 
            url: 'view/test/{id}', 
            getActionType: LOAD_TESTS, 
            loadingActionType: LOAD_TESTS_LOADING, 
            errorActionType: LOAD_TESTS_ERROR  
        };
        case sectionTypeEnum.SETUPS: return { 
            method: 'GET', 
            url: 'view/setup/{id}', 
            getActionType: LOAD_SETUPS, 
            loadingActionType: LOAD_SETUPS_LOADING, 
            errorActionType: LOAD_SETUPS_ERROR 
        };
        case sectionTypeEnum.ROUTINES: return { 
            method: 'GET', 
            url: 'view/routine/{id}', 
            getActionType: LOAD_ROUTINES, 
            loadingActionType: LOAD_ROUTINES_LOADING, 
            errorActionType: LOAD_ROUTINES_ERROR 
        };
        case sectionTypeEnum.ACTIONS: return { 
            method: 'GET', 
            url: 'view/action/{id}', 
            getActionType: LOAD_ACTIONS, 
            loadingActionType: LOAD_ACTIONS_LOADING, 
            errorActionType: LOAD_ACTIONS_ERROR 
        };
        default: return null;
    }
}

function deleteEndpointMapping(sectionTypeEnumValue){
    switch (sectionTypeEnumValue) {
        case sectionTypeEnum.TESTS: return { method: 'DELETE', url: 'view/test/{id}', loadingActionType: LOAD_TESTS_LOADING, errorActionType: LOAD_TESTS_ERROR  };
        case sectionTypeEnum.SETUPS: return { method: 'DELETE', url: 'view/setup/{id}', loadingActionType: LOAD_SETUPS_LOADING, errorActionType: LOAD_SETUPS_ERROR };
        case sectionTypeEnum.ROUTINES: return { method: 'DELETE', url: 'view/routine/{id}', loadingActionType: LOAD_ROUTINES_LOADING, errorActionType: LOAD_ROUTINES_ERROR };
        case sectionTypeEnum.ACTIONS: return { method: 'DELETE', url: 'view/action/{id}', loadingActionType: LOAD_ACTIONS_LOADING, errorActionType: LOAD_ACTIONS_ERROR };
        default: return null;
    }
}

function saveEndpointMapping(sectionTypeEnumValue){
    switch (sectionTypeEnumValue) {
        case sectionTypeEnum.TESTS: return { 
            method: 'POST', 
            url: 'view/test', 
            getActionType: LOAD_TESTS, 
            loadingActionType: LOAD_TESTS_LOADING, 
            errorActionType: LOAD_TESTS_ERROR  
        };
        case sectionTypeEnum.SETUPS: return { 
            method: 'POST', 
            url: 'view/setup', 
            getActionType: LOAD_SETUPS, 
            loadingActionType: LOAD_SETUPS_LOADING, 
            errorActionType: LOAD_SETUPS_ERROR
        };
        case sectionTypeEnum.ROUTINES: return { 
            method: 'POST', 
            url: 'view/routine', 
            getActionType: LOAD_ROUTINES, 
            loadingActionType: LOAD_ROUTINES_LOADING, 
            errorActionType: LOAD_ROUTINES_ERROR 
        };
        case sectionTypeEnum.ACTIONS: return { 
            method: 'POST', 
            url: 'view/action', 
            getActionType: LOAD_ACTIONS, 
            loadingActionType: LOAD_ACTIONS_LOADING, 
            errorActionType: LOAD_ACTIONS_ERROR 
        };
        default: return null;
    }
}

function httpRequest(endpointData, entityId, dispatch) {
    if (endpointData.loadingActionType) dispatch({ type: endpointData.loadingActionType });
    let url = endpointData.url.replace('{id}', entityId);
    getDataFromApi(url, endpointData.method)
        .then(response => response.json())
        .then(
            data => {
                dispatch({ type: endpointData.getActionType, data })
            },
            error => {
                if (!endpointData.errorActionType) throw(error); 
                dispatch({ type: endpointData.errorActionType, error: error.message || 'Unexpected Error!!!' })
            }
        )
 };

 export const getAllEntities = (entityActionTypeEnumValue, entityIdIfAny) => dispatch => {
        let endpointData = getAllEndpointMapping(entityActionTypeEnumValue);
        httpRequest(endpointData, entityIdIfAny, dispatch) 
 }
// export const getAllEntities = (entityActionTypeEnumValue) => dispatch => {
//    let endpointData = getAllEndpointMapping(entityActionTypeEnumValue);
//    if (endpointData.loadingActionType) dispatch({ type: endpointData.loadingActionType });
//    getDataFromApi(endpointData.url, endpointData.method)
//        .then(response => response.json())
//        .then(
//            data => {
//                dispatch({ type: entityActionTypeEnumValue, data })
//            },
//            error => {
//                if (!endpointData.errorActionType) throw(error); 
//                dispatch({ type: endpointData.errorActionType, error: error.message || 'Unexpected Error!!!' })
//            }
//        )
// };

// export const getEntityById = (entityActionTypeEnumValue, entityId) => dispatch => {
//     let endpointData = getByIdEndpointMapping(entityActionTypeEnumValue);
//     if (endpointData.loadingActionType) dispatch({ type: endpointData.loadingActionType });
//     let url = endpointData.url.replace('{id}', entityId);
//     getDataFromApi(url, endpointData.method)
//         .then(response => response.json())
//         .then(
//             data => {
//                 dispatch({ type: entityActionTypeEnumValue, data })
//             },
//             error => {
//                 if (!endpointData.errorActionType) throw(error); 
//                 dispatch({ type: endpointData.errorActionType, error: error.message || 'Unexpected Error!!!' })
//             }
//         )
//  };
 
//  export const deleteEntity = (entityActionTypeEnumValue, entityId) => dispatch => {
//     let endpointData = deleteEndpointMapping(entityActionTypeEnumValue);
//     if (endpointData.loadingActionType) dispatch({ type: endpointData.loadingActionType });
//     let url = endpointData.url.replace('{id}', entityId);
//     getDataFromApi(url, endpointData.method)
//         .then(response => response.json())
//         .then(
//             data => {
//                 dispatch({ type: entityActionTypeEnumValue, data })
//             },
//             error => {
//                 if (!endpointData.errorActionType) throw(error); 
//                 dispatch({ type: endpointData.errorActionType, error: error.message || 'Unexpected Error!!!' })
//             }
//         )
//  };

//  export const saveEntity = (entityActionTypeEnumValue, entity) => dispatch => {
//     let endpointData = saveEndpointMapping(entityActionTypeEnumValue);
//     if (endpointData.loadingActionType) dispatch({ type: endpointData.loadingActionType });
//     let url = endpointData.url.replace('{id}', entityId);
//     getDataFromApi(url, endpointData.method, entity)
//         .then(response => response.json())
//         .then(
//             data => {
//                 dispatch({ type: entityActionTypeEnumValue, data })
//             },
//             error => {
//                 if (!endpointData.errorActionType) throw(error); 
//                 dispatch({ type: endpointData.errorActionType, error: error.message || 'Unexpected Error!!!' })
//             }
//         )
//  };