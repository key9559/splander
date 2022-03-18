<template>
  <header
    class="pk-header"
    :class="[hdType]"
  >
    <div class="header-inner">
      <!-- BACK BUTTON -->
      <button
        type="button"
        class="btn btn-icon btn-back"
        onclick="history.go(-1);"
      >
        뒤로가기
        <i class="icon icon-back" />
      </button>
      <!-- END BACK BUTTON -->
      <!-- HD-TITLE -->
      <p class="hd-ttl">
        {{ hdTitle }}
      </p>
      <!-- END HD-TITLE -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    hdTitle: {
      type: String,
      default: '', // 해당 페이지의 header title 값 기입
    },
    hdType: {
      type: String,
      default: 'type1',
    },
  },
  // data() {
  //   return {
  //   };
  // },
};
</script>
