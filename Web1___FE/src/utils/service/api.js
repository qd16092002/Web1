import { AIPT_WEB_TOKEN } from "utils/constants/config";
import { getServerBaseUrl } from "utils/helps";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";
import Qs from "qs";

const req = axios.create();

req.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    message.error(error?.response?.data || "Có lỗi xảy ra");
    return Promise.reject(error);
  }
);

req.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    message.error(error?.response?.data || "Có lỗi xảy ra");
    return Promise.reject(error);
  }
);

const api = (options) => {
  const config = {
    baseURL: getServerBaseUrl(),
    ...options,
    maxContentLength: 10 * 1024 * 1024 * 1024,
    maxBodyLength: 10 * 1024 * 1024 * 1024,
    timeout: 10 * 60 * 1000,
    paramsSerializer: (params) =>
      Qs.stringify(params, { arrayFormat: "repeat" }),
    headers: {
      ...options.headers,
    },
  };

  if (Cookies.get(AIPT_WEB_TOKEN)) {
    config.headers.Authorization = Cookies.get(AIPT_WEB_TOKEN);
  }

  return req(config);
};

export default api;
