import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const getData = (url) => {
    return axios.get(`${baseUrl}${url}`)
     //return fetch(`${baseUrl}${url}`)

}

export const postData = (url, postObj) => {
    return axios.post(`${baseUrl}${url}`, postObj);
}

