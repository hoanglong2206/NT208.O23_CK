import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:5000/api/",
});

customAxios.defaults.withCredentials = true;

customAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
customAxios.interceptors.response.use(
  function (response) {
    // return response.data;
    return response;
  },
  function (error) {
    const status = error.response?.status || 500;

    switch (status) {
      // authentication (token related issues)
      case 401: {
        return Promise.reject(error);
      }

      // forbidden (permission related issues)
      case 403: {
        return Promise.reject(error);
      }

      // bad request
      case 400: {
        return Promise.reject(error);
      }

      // not found
      case 404: {
        return Promise.reject(error);
      }

      // conflict
      case 409: {
        return Promise.reject(error);
      }

      // unprocessable
      case 422: {
        return Promise.reject(error);
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(error);
      }
    }
  }
);

export default customAxios;
