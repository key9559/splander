

import Vue from 'vue';
import axios from 'axios';

const tokenName = process.env.VUE_APP_TOKEN_NAME;

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const _config = {
  baseURL: process.env.VUE_APP_API_URL,
};

const _axios = axios.create(_config);

_axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const result = localStorage.getItem(tokenName);
    if (result) {
      config.headers.Authorization = `Bearer ${result}`;
    }
    return config;
  },
  (error) =>
  // Do something with request error
    Promise.reject(error)
  ,
);

// Add a response interceptor
_axios.interceptors.response.use(
  (response) =>
  // Do something with response data
    response,
  (error) => {
    // Do something with response error
    if (error.response && error.response.status === 401) {
      if (localStorage.getItem(tokenName)) {
        // alert(
        //     '인증 시간이 만료되어 로그인이 해제되었습니다. 다시 로그인해주시기 바랍니다',
        // );

        window.ReactNativeWebView.postMessage(
          JSON.stringify({ name: 'request-webview-app-logout' }),
        );
        // sessionStorage.removeItem(tokenName);
        localStorage.removeItem(tokenName);
        delete axios.defaults.headers.common.Authorization;
        window.location.replace(process.env.VUE_APP_WEB_URL);
      }
    } else if (!error.response) {
      console.error(error);
      // alert(
      //    '네트워크 접속 상태가 불안정합니다.\n 잠시 후 다시 시도해주시기 바랍니다',
      // );
    }

    return Promise.reject(error);
  },
);

Plugin.install = function (_Vue) {
  _Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(_Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
