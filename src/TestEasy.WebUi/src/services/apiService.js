const API_BASE_ADDRESS = 'https://localhost:5001';

export const getActions = () => {
    const uri = API_BASE_ADDRESS + "/view/actions";
    return fetch(uri, {method: 'GET'});
}

