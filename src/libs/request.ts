import axios from "axios";

// 创建一个axios实例
const myAxios = axios.create({
  baseURL: "http://localhost:8101",
  timeout: 10000,
  withCredentials: true,
});

// 创建请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// 创建响应的拦截器
myAxios.interceptors.response.use(
  function (response) {
    // 处理响应数据
    const { data } = response;

    // 处理未登录
    if (data.code === 40100) {
      if (
        !response.request.responseURL.includes("/user/get/login") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    } else if (data.code !== 0) {
      throw new Error(data.message ?? "服务器异常");
    }

    return data;
  },
  function (error) {
    return Promise.reject(error);
  },
);