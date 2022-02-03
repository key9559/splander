import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '~@/store';
import index from '~@/views';
import isEmpty from 'lodash/isEmpty';
// import CustomerMain from '~@/views/customer/CustomerMain'

const _ = {
  isEmpty,
};

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => {
    if (error.name === 'NavigationDuplicated') {
      return {
        event: 'NavigationDuplicated',
      };
    }
  });
};

const routerReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace (location) {
  return routerReplace.call(this, location).catch(error => {
    if (error.name === 'NavigationDuplicated') {
      return {
        event: 'NavigationDuplicated',
      };
    }
  });
};

const routes = [
  // 메인
  {
    path: '/',
    name: 'Index',
    component: index,
    // meta: { requiresResetScrollHeight: true, requiresAuth: true },
    /* beforeEnter: (to, from, next) => {
      if (store.getters.isUser && store.getters.user.user_type.startsWith('host')) {
        // return next({
        //   replace: true,
        //   name: 'SellersMain',
        // });
      }
      next();
    }, */
  },
  {
    path: '/util-postcode', // 우편번호 찾기
    name: 'UtilPostcode',
    component: () => import('~@/views/util/Postcode'),
  },
  /* ====================== auth ====================== */
  // 로그인
  {
    path: '/login',
    name: 'Login',
    component: () => import('~@/views/auth/Login'),
    meta: { requiresResetScrollHeight: true },
    beforeEnter: (to, from, next) => {
      if (store.getters.isUser) {
        return next({
          replace: true,
          name: 'Index',
        });
      }
      next();
    },
  },
  // 회원가입
  {
    path: '/register',
    name: 'Register',
    component: () => import('~@/views/auth/Register'),
    meta: { requiresResetScrollHeight: true },
  },
  // 회원가입 완료
  {
    path: '/register-complete',
    name: 'RegisterComplete',
    component: () => import('~@/views/auth/RegisterComplete'),
    meta: { requiresResetScrollHeight: true },
  },
  // 아이디찾기
  {
    path: '/find-id',
    name: 'FindId',
    component: () => import('~@/views/auth/FindId'),
    meta: { requiresResetScrollHeight: true },
  },
  // 아이디찾기완료
  {
    path: '/find-id-complete',
    name: 'FindIdComplete',
    component: () => import('~@/views/auth/FindIdComplete'),
    meta: { requiresResetScrollHeight: true },
  },
  // 비밀번호찾기
  {
    path: '/find-pw',
    name: 'FindPw',
    component: () => import('~@/views/auth/FindPw'),
    meta: { requiresResetScrollHeight: true },
  },
  // 소셜로그인
  {
    path: '/social-redirect/:provider',
    name: 'SocialRedirect',
    component: () => import('~@/views/auth/SocialRedirect'),
  },

  /* ====================== etc ====================== */
  // 고객지원
  {
    path: '/developer-info',
    name: 'DeveloperInfo',
    component: () => import('~@/views/common/DeveloperInfo.vue'),
    meta: { requiresResetScrollHeight: true },
  },
  {
    path: '*',
    name: 'PageError',
    component: () => import('~@/views/PageError.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('~@/views/util/Components.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash', // history, hash
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // 페이지 히스토리에 이전 페이지의 스크롤 위치가 저장되어 있으면
      return new Promise((resolve /* reject */) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 0);
      });
    }
  },
});

router.beforeEach(async (to, from, next) => {
  // 회원가입에 필요한 정보가 미입력된 유저는 회원가입 화면으로 이동
  /* if (
    store.getters.isUser &&
    !store.getters.isUserVerified
  ) {
    if (!['RegisterIntro', 'Register', 'RegisterSeller01', 'RegisterSeller02'].includes(to.name)) {
      if (router?.app?.alert) {
        router.app.alert('정보입력 후 이용가능합니다.');
      }
      return next({
        replace: true,
        name: 'RegisterIntro',
      });
    }
    next();
  } */

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 로그인된 유저가 아니면 로그인 화면으로 이동
    if (!store.getters.isUser) {
      // 로그인 전
      return next({
        replace: true,
        name: 'Login',
        // query: { redirect: to.fullPath } // 로그인 후 원래 가려던 페이지로 이동
      });
    } else {
      // 페이지 이동 시 정보 갱신
      if (from.name && from.name !== to.name) {
        try {
          await store.dispatch('userDetail');
        } finally {
          //
        }
      }
    }
  }

  // requiresRefreshQuerystring 값이 있으면 해당 화면 새로고침 시 해당화면에 지정되어 있던 쿼리스트링 초기화
  if (to.matched.some(record => record.meta.requiresRefreshQuerystring)) {
    if (!from.name && !_.isEmpty(to.query)) {
      return next({
        name: to.name,
        params: to.params,
      });
    }
  }

  // requiresResetScrollHeight 값이 있으면 해당 화면 이동 시 스크롤 맨 위로 이동
  if (to.matched.some(record => record.meta.requiresResetScrollHeight)) {
    setTimeout(() => {
      document.querySelectorAll('html, .page, .l_center').forEach(x => {
        if (x.scrollTop !== 0) {
          x.scroll({
            top: 0,
          });
        }
      });
    }, 0);
  }

  return next();
});

export default router;
