<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-wrapper"
    :class="{'is-show': confirmModal.isPopupVisible}"
  >
    <span
      class="modal-light-box"
      @click="confirmModal.onCancel"
    />

    <div
      class="modal"
      :class="{'is-show': confirmModal.isPopupVisible}"
    >
      <div class="modal-box">
        <span
          class="modal-ttl-dec"
          v-html="confirmModal.title"
        />

        <span
          v-if="confirmModal.desc"
          class="modal-dec"
          v-html="confirmModal.desc"
        />

        <!-- 컨펌 타입일 때 버튼 영역 -->
        <div
          class="modal-btn-wrap"
        >
          <button
            type="button"
            class="btn btn-gray btn-md btn-cancel btn-rounded"
            @click="confirmModal.onCancel"
          >
            {{ confirmModal.no }}
          </button>
          <button
            type="button"
            class="btn btn-main btn-md btn-rounded"
            @click="confirmModal.onConfirm"
          >
            {{ confirmModal.yes }}
          </button>
        </div>
      </div>

      <!-- 2021-02-10 수정 시작 -->
      <div
        v-if="confirmModal.etc"
        class="alert-dialog__url-wrap"
      >
        <a
          v-for="(item, index) in confirmModal.etc"
          :key="index"
          :href="(item.url) ? item.url: 'javascript:;'"
          class="link_url"
          v-on="item.onClick ? { click: item.onClick } : {click: confirmModal.onCancel}"
        >{{ item.text }}</a>
      </div>
      <!-- // 2021-02-10 수정 끝 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    title: {
      type: String,
      default: '', // 기본 알러트창 입니다.
    },
    desc: {
      type: String,
      default: '', // 부가 설명 텍스트가 들어가는 자리입니다.
    },
  },
  data () {
    return {
      confirmModal: this.$store.state.confirmModal,
    };
  },
  watch: {
    '$store.state.confirmModal': function () {
      if (this.$store.state.confirmModal.isPopupVisible) {
        this.confirmModal = this.$store.state.confirmModal;
      } else {
        this.confirmModal.isPopupVisible = false;
        setTimeout(() => { this.confirmModal = this.$store.state.confirmModal; }, 200);
      }
    },
  },
};
</script>

<style scoped>
</style>
