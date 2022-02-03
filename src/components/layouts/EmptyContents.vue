<template>
  <div
    class="empty-content-wrap"
  >
    <div class="empty-txt-grp">
      <i class="icon icon-empty" />

      <!-- eslint-disable vue/no-v-html -->
      <p
        class="empty-txt"
        v-html="txt"
      >
        <!-- {{ txt }} -->
        <!-- 줄바꿈 <br> 적용을 위해서 v-html로 적용 -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyContents',
  props: {
    txt: {
      type: String,
      default: '내역이 없습니다.',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
