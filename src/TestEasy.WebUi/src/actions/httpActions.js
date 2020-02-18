import { getDataFromApi } from "../services/apiService"

export const getDataAction = (apiUrl, successActionType, loadingActionType, errorActionType) => dispatch => {
   if (loadingActionType) dispatch({ type: loadingActionType });
   getDataFromApi(apiUrl)
       .then(response => response.json())
       .then(
           data => { 
               if (successActionType) dispatch({ type: successActionType, data }) 
            },
           error => { 
               if (errorActionType) dispatch({ type: errorActionType, error: error.message || 'Unexpected Error!!!' })
            }
       )
};