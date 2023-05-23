import axios from "axios";

export default function http(data) {
  const instance = axios.create();
  instance.interceptors.request.use(
    function (config) {
      config.url = process.env.REACT_APP_API_ENDPOINT + config.url;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance(data);
}
