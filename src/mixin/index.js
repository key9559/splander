import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';
import { saveAs } from 'file-saver';
import _ from 'lodash';
import reactNativeWebViewHelper from '~@/lib/reactNativeWebViewHelper';
import formatters from '~@/lib/formatters';
import pagination from '~@/lib/pagination';
import processImageFile from '~@/lib/processImageFile';
import formDatas from '~@/lib/formDatas';
import orderProcess from '~@/lib/orderProcess';
import constants from '~@/constants';

const mixin = {
  mixins: [clickaway],
  created () {
    this.document = document;
    this.window = window;
    this._ = _;

    this.baseUrl = process.env.VUE_APP_BASE_URL;
    this.webUrl = process.env.VUE_APP_WEB_URL;
    this.apiUrl = process.env.VUE_APP_API_URL;
    this.storageUrl = process.env.VUE_APP_STORAGE_URL;

    this.scheme = process.env.VUE_APP_SCHEME_NAME;
    this.version = process.env.VUE_APP_VERSION;

    this.$constants = constants;

    this.onerrorSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfdLFp3Byzzs4rXrkc3agvVwY9JoZKpDJrw&usqp=CAU';

    this.unlockScroll();
    this.savedPositions = [];
  },
  computed: {
    ...mapGetters([
      'user',
      'isUser',
      'settings',
      'keepAlive',
    ]),
  },
  methods: {
    ...mapActions([
      'userLogin',
      'userDetail',
      'userDetailUpdate',
      'userLogout',
      'settingsLoad',
      'keep',
      'unkeep',
      'clearKeep',
      'toggleAlert',
      'toggleConfirm',
      'toggleLoading',
      'toggleModal',
      'toggleTooltip',
    ]),
    ...reactNativeWebViewHelper,
    ...formatters, // 정규식, 전화번호 포멧 관련
    ...pagination,
    ...processImageFile,
    ...orderProcess,
    formDatas,
    scrollToTop () {
      // 스크롤 컨테이너 전체 스크롤 위로 이동
      document.querySelectorAll('html,body,#app,#page').forEach(x => { x.scrollTop = 0; });
    },
    lockScroll () {
      document.querySelector('html').style.overflow = 'hidden';
      // if (window.innerWidth >= 600) {
      //     document.querySelector('html').style.paddingRight = 4 + 'px';
      // }
    },
    unlockScroll () {
      document.querySelector('html').style.overflow = 'auto';
      // if (window.innerWidth >= 600) {
      //     document.querySelector('html').style.paddingRight = 0;
      // }
    },
    savePositions (selectors = []) {
      // 주의! : $router.push, $router.replace 호출 직전에 실행
      // keep-alive 상태인 엘리먼트들의 스크롤 상태 저장 (최외곽의 scroll인 경우 필요없음)
      for (const selector of selectors) {
        const position = {
          selector,
          x: 0,
          y: 0,
        };

        const elem = document.querySelector(selector);
        if (elem) {
          position.x = elem.scrollLeft;
          position.y = elem.scrollTop;

          this.savedPositions.push(position);
        }
      }
    },
    restorePositions (selectors = []) {
      // 주의! : activated 라이프사이클 함수에서 실행
      // keep-alive 상태인 엘리먼트들의 스크롤 상태 복구 후 초기화 (최외곽의 scroll인 경우 필요없음)
      for (const selector of selectors) {
        const elem = document.querySelector(selector);
        if (elem) {
          const found = this.savedPositions.find(x => x.selector === selector);
          if (found) {
            elem.scrollTo({
              left: found.x,
              top: found.y,
            });
          }
        }
      }

      // 초기화
      this.savedPositions = [];
    },
    async download (path, filename = 'download.txt') {
      try {
        this.toggleLoading(true);

        await this.$axios
          .get(path, {
            responseType: 'blob',
          })
          .then((res) => {
            // 웹서버 내부적으로 404일 때 301로 가져오는 index.html 무시
            if (res.status === 301) {
              throw new Error();
            }

            let downloadFilename = filename;
            if (res.headers['content-disposition']) {
              downloadFilename = res.headers['content-disposition']
                .split('filename=')[1]
                .replace(/['"]+/g, ''); // 헤더에서 파일명 추출 후 따옴표 제거
            }
            saveAs(new Blob([res.data]), downloadFilename);
          });
      } catch (e) {
        console.error(e);

        switch (e.response?.data?.state) {
        default:
          this.alert('서버오류. 지속되면 고객센터로 연락바랍니다.');
        }
      } finally {
        this.toggleLoading(false);
      }
    },
    async processFile (e) {
      // input[type=file] @change 이벤트 단순 헬퍼
      const fileObject = this._.get(e, 'target.files[0]', null);
      if (fileObject) {
        const file = fileObject;
        return { file };
      }

      return { file: null };
    },
    alert (title = '', desc = '', onClose = () => {}) {
      return new Promise((resolve, reject) => {
        if (typeof desc !== 'string') {
          reject(new Error('desc 매개변수에는 문자열이 들어가야 합니다'));
        }

        this.toggleAlert({
          isPopupVisible: true,
          title,
          desc,
          onClose: async () => {
            await onClose();

            this.toggleAlert({
              isPopupVisible: false,
              title,
              desc,
              onClose: () => {},
            });

            setTimeout(() => {
              this.toggleAlert({
                isPopupVisible: false,
                title: '',
                desc: '',
                onClose: () => {},
              });

              resolve();
            }, 250);
          },
        });
      });
    },
    confirm (
      title = '',
      desc = '',
      yes = '확인',
      no = '닫기',
      etc,
      onConfirm = () => {},
      onCancel = () => {},
    ) {
      return new Promise((resolve, reject) => {
        if (typeof desc !== 'string') {
          reject(new Error('desc 매개변수에는 문자열이 들어가야 합니다'));
        }

        this.toggleConfirm({
          isPopupVisible: true,
          title,
          desc,
          yes,
          no,
          etc,
          onConfirm: async () => {
            await onConfirm();

            setTimeout(() => {
              this.toggleConfirm({
                isPopupVisible: false,
                title: '',
                desc: '',
                yes: '',
                no: '',
                etc: [], // [{url: '', text: '', onClick: () => {}}]
                onConfirm: () => {},
                onCancel: () => {},
              });
            }, 0);

            resolve({ success: true, type: 'confirm' });
          },
          onCancel: async () => {
            await onCancel();

            setTimeout(() => {
              this.toggleConfirm({
                isPopupVisible: false,
                title: '',
                desc: '',
                yes: '',
                no: '',
                etc: [],
                onConfirm: () => {},
                onCancel: () => {},
              });
            }, 0);

            resolve({ success: false, type: 'cancel' });
          },
        });
      });
    },
    getCurrentPosition (options = {}) {
      return Promise.race([
        new Promise((resolve, reject) => { // 비동기 API를 Promise로 처리
        // HTML5 위치 API. (https 에서만 동작함)
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            ...{
              enableHighAccuracy: false,
              maximumAge: 1000, // maximum cached position age
              timeout: 100,
            },
            ...options, // 옵션 덮어쓰기
          });
        }),
        new Promise((resolve, reject) => { setTimeout(resolve, 100); }), // 타임아웃
      ]);
    },
    openModal (type) {
      this.lockScroll();
      this.toggleModal({
        visible: true,
        type: type,
      });
    },
    closeModal () {
      this.unlockScroll();
      this.toggleModal({
        visible: false,
        type: null,
      });
    },
  },
};

Vue.mixin(mixin);

export default mixin;
