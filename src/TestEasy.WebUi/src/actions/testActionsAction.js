import { getActions } from "../services/apiService"
export const LOAD_ACTIONS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_ACTIONS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_ACTIONS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';

export const loadActions = () => dispatch => {
   dispatch({ type: LOAD_ACTIONS_LOADING });
   getActions()
       .then(response => response.json())
       .then(
           data => dispatch({ type: LOAD_ACTIONS_SUCCESS, data }),
           error => dispatch({ type: LOAD_ACTIONS_ERROR, error: error.message || 'Unexpected Error!!!' })
       )
};