import axios from 'axios'
import {ConfigureStore} from "../Redux/Store";
import {logoutUser} from "../Actions/UserAction";
import { createBrowserHistory } from "history"
import {Redirect} from "react-router-dom";
import { BaseUrl } from './BaseUrl';
import { readFromLS } from './writeToLS';

const store = ConfigureStore()
const history = createBrowserHistory()

export const apiClient = axios.create({
    baseURL: BaseUrl,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', 
        'Authorization': 'Bearer '+readFromLS('token')
    },
});

export const apiClientLogin = axios.create({
    baseURL: BaseUrl,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
}); 

apiClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization= 'Bearer '+readFromLS('token')
    return config; 
  }, function (error) { 
    // Do something with request error
    return Promise.reject(error);
  });

apiClient.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        history.push('/sign-in')
        return Promise.resolve()
    }
    return Promise.reject(error)
});

