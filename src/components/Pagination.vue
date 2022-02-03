<template>
  <div
    v-if="page && pages"
    :style="[
      {'pointer-events': isLoading ? 'none' : 'auto'},
      {'opacity': isLoading ? '0.5' : '1'},
    ]"
  >
    <div class="pagination">
      <button
        type="button"
        class="pagination-arw-btn"
        @click.prevent="page = 1"
      >
        <i class="ico ico-db-prev" />
        <span class="is-voice-only">맨 앞으로</span>
      </button>

      <button
        type="button"
        class="pagination-arw-btn"
        @click.prevent="page > 1 ? page-=1 : 1"
      >
        <i class="ico ico-prev" />
        <span class="is-voice-only">이전 페이지</span>
      </button>

      <!-- [D] 태그는 div태그 or span 태그로 해도 무방 -->
      <a
        v-if="(page - Math.ceil(pageCount / 2) > 0) && pages > pageCount"
        class="pagination-btn"
      >
        <i class="num">…</i>
      </a>
      <template v-for="value in _.range(page - Math.ceil(pageCount / 2) - 2, page)">
        <a
          v-if="(value > page - Math.ceil(pageCount / 2) || value >= pages - pageCount) && value > 0"
          :key="value"
          href="#"
          class="pagination-btn"
          @click.prevent="page = value"
        >
          <i class="num">{{ value }}</i>
        </a>
      </template>
      <a
        href="#"
        class="pagination-btn is-active"
        @click.prevent
      >
        <i class="num">{{ page }}</i>
      </a>
      <template v-for="value in _.range(page + 1, page + 1 + Math.ceil(pageCount / 2) + 2)">
        <a
          v-if="(value + 1 < page + 1 + Math.ceil(pageCount / 2) || value + 1 <= pageCount + 2) && value <= pages"
          :key="value"
          href="#"
          class="pagination-btn"
          @click.prevent="page = value"
        >
          <i class="num">{{ value }}</i>
        </a>
      </template>
      <a
        v-if="(page + 1 + Math.ceil(pageCount / 2) < pages + 2) && pages > pageCount"
        class="pagination-btn"
      >
        <i class="num">…</i>
      </a>

      <button
        type="button"
        class="pagination-arw-btn"
        @click.prevent="page < pages ? page+=1 : pages"
      >
        <i class="ico ico-next" />
        <span class="is-voice-only">다음 페이지</span>
      </button>

      <button
        type="button"
        class="pagination-arw-btn"
        @click.prevent="page = pages"
      >
        <i class="ico ico-db-next" />
        <span class="is-voice-only">맨 뒤로</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    isLoading: { // 로딩 여부
      type: Boolean,
      default: false,
    },
    offset: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    pages: { // 전체 페이지 갯수
      type: Number,
      default: null,
    },
    pageCount: { // 버튼으로 표시할 페이지 갯수
      type: Number,
      default: 3,
    },
    activePage: { // 현재 페이지 번호(외부)
      type: Number,
      default: 1,
    },
  },
  data () {
    return {
      page: this.activePage, // 현재 페이지 번호(내부)
    };
  },
  watch: {
    activePage () {
      if (this.page !== this.activePage) {
        this.page = this.activePage;
      }
    },
    page () {
      if (this.page <= 0) {
        this.page = 1;
        return;
      }

      if (this.page > this.pages) {
        this.page = this.pages;
        return;
      }

      // 상위 컴포넌트에 변경된 페이지 번호 전달
      this.$emit('update:activePage', this.page);
    },
  },
  created () {
    if (this.pageCount <= 1 || this.pageCount % 2 === 0) {
      throw new Error('pageCount의 값은 1보다 큰 홀수만 가능합니다');
    }
  },
};
</script>
