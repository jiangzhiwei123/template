/**
 * axios配置
 */
import axios from "axios";
import qs from "qs";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
// 正在进行中的请求列表
let reqList = [];
/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function(reqList, url, cancel, errorMessage) {
  const errorMsg = errorMessage || "";
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      cancel(errorMsg);
      return;
    }
  }
  reqList.push(url);
  // console.log(`axios:队列加入请求${url}`);
};
/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = function(reqList, url) {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1);
      // console.log(`axios:队列删除请求${url}`);
      break;
    }
  }
};

const service = axios.create({
  // 设置超时时间
  timeout: 60000,
  baseURL: process.env.VUE_APP_BASE_URL
});

/*
 * post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置
 *即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8
 */
service.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 拦截请求
service.interceptors.request.use(
  config => {
    // console.log("axios拦截请求");
    // 配置formData的方式
    config.data = qs.stringify(config.data);
    // 设置cancelToken对象
    config.cancelToken = source.token;
    // console.log(config);
    // console.log(config.baseURL);
    // console.log(config.url);
    // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    stopRepeatRequest(
      reqList,
      `${config.baseURL}${config.url}`,
      source.cancel,
      `${config.url} 正在请求中`
    );

    return config;
  },
  error => {
    // ...
    return Promise.reject(error);
  }
);

// 拦截响应
service.interceptors.response.use(
  response => {
    // console.log("axios拦截响应");
    // console.log(response);
    // 增加延迟，相同请求不得在短时间内重复发送
    // setTimeout(() => {
    //   allowRequest(reqList, response.config.url);
    // }, 1000);
    allowRequest(reqList, response.config.url);
    return response;
  },
  error => {
    // console.log("axios拦截响应error");
    // console.log(error);
    if (axios.isCancel(error)) {
      // console.error(error.message);
    } else {
      // 增加延迟，相同请求不得在短时间内重复发送
      // setTimeout(() => {
      //   allowRequest(reqList, error.config.url);
      // }, 1000);
      allowRequest(reqList, error.config.url);
    }
    return Promise.reject(error);
  }
);

export default service;
