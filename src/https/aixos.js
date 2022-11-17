import axios from "axios";

const instance = axios.create();
instance.defaults.timeout = 6000;

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
  
    return config
  },
  function (err) {
  
    return err
  }
);

// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log(response);
    return response
  },
  function (err) {
  
    return err
  }
);

export default instance
