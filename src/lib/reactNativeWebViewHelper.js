// 초기화
if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
  //
} else {
  window.ReactNativeWebView = { postMessage: () => {}, empty: true };
}

const reactNativeWebViewHelper = {
  viewOpenBrowser(url = '/', options = {}) {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          name: 'request-webview-browser-open',
          path: url,
          options,
        }),
      );
    } else {
      window.open(url);
    }
  },
  viewOpen(url = '/', options = {}) {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          name: 'request-webview-modal-open',
          path: url,
          options,
        }),
      );
    } else {
      window.open(url);
    }
  },
  viewAuthOpen(url = '/', options = {}) {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          name: 'request-webview-modal-open',
          path: url,
          options,
        }),
      );
    } else {
      window.location.href = url;
    }
  },
  viewAuthInappbrowserOpen(url = '/', options = {}) {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          name: 'request-auth-token-inappbrowser',
          path: url,
          options,
        }),
      );
    } else {
      window.location.href = url;
    }
  },
  viewPermissionOpen() {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          name: 'request-permission-page-open',
          path: `${this.webUrl}/#/set-access`,
        }),
      );
    }
  },
  viewShareOpen(data = '') {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          name: 'request-share-open',
          data,
        }),
      );
    }
  },
  viewClose(params = {}) {
    // 화면 이동식 결제일 때 해당 주소로 리다이렉트
    if(params.payload?.redirect) {
      window.location.href = params.payload.redirect;
      return;
    }

    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ name: 'request-webview-modal-close', params }),
      );
    } else {
      if (window.opener) {
        window.opener.$EventBus.$emit(params.name, params.payload);
      }

      window.close();
    }
  },
  viewExit(params = {}) {
    if (!window.ReactNativeWebView.empty) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ name: 'request-webview-exit', params }),
      );
    } else {
      // 새로고침으로 초기화(브라우저 종료 불가)
      window.location.reload();
    }
  },
};

export default reactNativeWebViewHelper;
