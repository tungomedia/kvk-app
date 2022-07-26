import axios from 'axios';    

const apiKey = 'testkey';
const apiUrl = 'https://617c09aad842cf001711c200.mockapi.io/v1/';

axios.interceptors.request.use(
  function (config) {
    // optionally put the apikey in here
    config.headers.Authorization = apiKey;
    // the api base url
    config.baseURL = apiUrl;

    return config;
  },
  function (error) {
    // handle these errors nicely
    console.log(error);
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};