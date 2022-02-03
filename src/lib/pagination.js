import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';

/*
data() {
  return {
    pagination: {
      ...this.paginateData(),
      limit: 10 // limit 값 변경
    },
  }
},
*/

const pagination = {
  paginateData() {
    return {
      paramsPrevious: null,
      page:
      Number(this.$route?.query?.offset) /
      Number(this.$route?.query?.limit) +
      1 || 1,
      pages: null,
      offset: Number(this.$route?.query?.offset) || 0,
      limit: Number(this.$route?.query?.limit) || 10,
    };
  },
  paginateParams(params, pagination) {
    const paramsNext = {
      ...params,
      ...{
        offset: (pagination.page - 1) * pagination.limit,
        limit: pagination.limit,
      },
    };

    if (!isEqual(params, pagination.paramsPrevious)) {
      if (pagination.paramsPrevious !== null) {
        paramsNext.offset = 0;
      }
      pagination.paramsPrevious = cloneDeep(
        omit(params, ['offset', 'limit']),
      );
    }

    return paramsNext;
  },
  paginateResponse(data, pagination) {
    if (!data.pagination) {
      // API 응답에 pagination 정보가 없음
      throw new Error('API 응답에 pagination 정보 없음');
    }

    pagination.page = data.pagination.offset / data.pagination.limit + 1;
    pagination.pages = Math.ceil(data.pagination.count / pagination.limit);

    return data;
  },
};

export default pagination;
