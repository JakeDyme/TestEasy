import axios from 'axios'

const API_BASE_ADDRESS = 'https://localhost:5001';

export const getDataFromApi = (urlExtension, method, object) => {
    const url = API_BASE_ADDRESS + "/" + urlExtension;

    switch (method){
        case 'GET': return fetch(url);
        case 'DELETE': return axios.delete(url);
        case 'PUT': return axios.put(url, object);
        case 'PUT': return axios.post(url, object);
    }
     
}
