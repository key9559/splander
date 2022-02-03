<template>
  <div
    id="page"
    class="page main-page"
  >
    <!-- header -->
    <layout-header
      hd-type="type2"
      hd-title="투두"
    />
    <gnb active2="true" />
    <!-- 글쓰기 버튼 -->
    <div class="floating-plus-btn-wrap">
      <!-- FIXME: 투두탭에서는 투두 작성, 라이프 탭에서는 라이프 작성으로 연결 -->
      <button
        class="btn floating-btn"
        @click="$router.push('/todo-create')"
      >
        글쓰기
        <i class="icon icon-plus-main" />
      </button>
    </div>
    <!-- END 글쓰기 버튼 -->
    <div class="page-container">
      <banner-slide />
      <!-- content -->
      메인
      <!-- END content -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style lang="scss" scoped>
</style>
