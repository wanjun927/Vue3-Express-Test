/*
 * @Author: Mia
 * @Date: 2021-10-14 15:18:21
 * @Description: 
 */
import axios from "axios";
import store from "@/store/index";
import qs from "qs";


let baseUrl = "http://localhost:3000";
// axios配置
axios.defaults.baseURL = baseUrl;
// 设置超时时间
axios.defaults.timeout = 10000;
// post 请求头设置
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      // config.headers.AccessControlAllowOrigin = "*"
      // config.headers.AccessControlAllowHeaders="X-Requested-With"
      // config.headers.AccessControlAllowMethods = "*"
      // config.headers.XPoweredBy = '3.2.1'
      // config.headers.ContentType = "application/json;charset=utf-8";
      // config.headers.Authorization =localStorage.getItem("token")
    }
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    // 993登录过期
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    console.log("qs", params);
    axios
      .post(url, qs.stringify(params))
      // .post(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
