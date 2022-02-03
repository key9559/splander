import addrList from '~@/constants/modules/addr-list';
import bankcode from '~@/constants/modules/bankcode';
import datePickLocale from '~@/constants/modules/date-pick-locale';

const constants = {
  /* 길고 복잡한 상수일 시 다른 파일에 작성 후 import */
  addrList,
  bankcode,
  datePickLocale,
  /* 간단한 상수일 시 바로 작성 */
  basicState: {
    0: '비활성화',
    1: '활성화',
  },
  category: {
    1: '의사',
    2: '약사',
    3: '필라테스',
    4: '요가',
    5: '피트니스',
  },
  mapScale: {
    1: 20,
    2: 30,
    3: 50,
    4: 100,
    5: 250,
    6: 500,
    7: 1000,
    8: 2000,
    9: 4000,
    10: 8000,
    11: 16000,
    12: 32000,
    13: 64000,
    14: 128000,
  },
};


export default constants;
