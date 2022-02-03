import Vue from 'vue';
import './lib/componentLoader';
import './plugins/axios';
import './mixin';
import _moment from 'moment';
import { extendMoment } from 'moment-range';
import VueMomentJS from 'vue-momentjs';
import infiniteScroll from 'vue-infinite-scroll';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VueClipboard from 'vue-clipboard2';
import VCalendar from 'v-calendar';
import VueTheMask from 'vue-the-mask';
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import StarRating from 'vue-star-rating';
import store from './store';
import router from './router';
import App from './App.vue';
import jQuery from 'jquery';
import VueApexCharts from 'vue-apexcharts';

Vue.component('VueSlider', VueSlider);

Vue.use(VueMomentJS, extendMoment(_moment));
Vue.component('StarRating', StarRating);
Vue.use(infiniteScroll);
Vue.use(VueAwesomeSwiper);
Vue.use(VueClipboard);
Vue.use(VCalendar);
Vue.use(VueTheMask);
Vue.use(VueApexCharts);
Vue.component('Apexchart', VueApexCharts);

Vue.config.productionTip = false;

window.$EventBus = new Vue();
window.$ = jQuery;

const tokenName = process.env.VUE_APP_TOKEN_NAME;

// 유저정보 로드 후 앱 시작
const setup = async () => {
  const preload = [];

  if (localStorage.getItem(tokenName)) {
    // 로컬 스토리지에 인증 토큰이 있으면 자동로그인 해제 기능 구현을 위해 세션스토리지에 넣음
    sessionStorage.setItem(tokenName, localStorage.getItem(tokenName));
  }

  if (sessionStorage.getItem(tokenName)) {
    // 세션 스토리지에 인증 토큰이 있으면 유저 정보 가져오기
    // 인증 토큰이 만료된 경우 axios interceptors 에서 모든 인증정보 제거 후 첫화면으로 이동시킴
    preload.push(store.dispatch('userDetail'));
  }

  // 처음에 호출해야할 API가 많은경우 동시에 호출하기 (유저정보, 세팅 등등...)
  await Promise.all(preload);

  if (sessionStorage.getItem(tokenName)) {
    // 세션 스토리지에 토큰이 있고 인증 토큰이 만료되지 않았을 때 앱에서 FCM 토큰 요청
    window.ReactNativeWebView.postMessage(JSON.stringify({ name: 'request-fcm-token' }));
  }

  new Vue({
    created () {
      // AOS.init({ disable: 'phone', easing: 'ease-in-out', once: true })
    },
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
};

// 리액트 네이티브 콜백
window.$EventBus.$on('postMessage', async (response) => {
  switch (response.name) {
  case 'response-auth-token': {
    const { token } = response.payload; // 앱에 저장되어 있는 인증 토큰

    if (process.env.NODE_ENV === 'development') {
      console.log(token);
    }

    // 토큰이 있으면 로컬스토리지에 추가 후 재시작
    if (token) {
      localStorage.setItem(tokenName, token);
      window.location.reload();
    }

    // 앱 시작
    setup();
    break;
  }

  case 'response-fcm-token': {
    const { fcmToken } = response.payload;

    if (process.env.NODE_ENV === 'development') {
      console.log(fcmToken);
    }

    if (fcmToken && sessionStorage.getItem(tokenName)) {
      await store.dispatch('userDetailUpdate', {
        user_token: fcmToken,
      });
    }
    break;
  }

  case 'event-webview-not-can-go-back': {
    // 웹뷰에서 마지막 페이지로 판단 시 메인화면으로 이동 요청
    if (store.getters.user) {
      router.replace('/');
    }
    break;
  }

  default: {
    window.$EventBus.$emit(response.name, response.payload);
  }
  }
});

if (!window.ReactNativeWebView.empty) {
  // 웹뷰인 경우 로컬스토리지에 토큰 있는지 확인
  if (localStorage.getItem(tokenName)) {
    // 로컬스토리지에 인증 토큰이 있으면

    // 앱 시작
    setup();
  } else {
    // 로컬스토리지에 인증 토큰이 없으면
    // 1. 진짜로 없는 경우
    // 2. 앱에는 저장되었지만 웹뷰가 GC되서 로컬스토리지가 날아간 경우

    // 앱에 저장되어 있는 인증 토큰 요청
    window.ReactNativeWebView.postMessage(JSON.stringify({ name: 'request-auth-token' }));
  }
} else {
  // 브라우저인 경우 바로 앱 시작
  setup();
}
