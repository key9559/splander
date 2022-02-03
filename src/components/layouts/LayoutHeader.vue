<template>
  <header
    class="pk-header"
    :class="[hdType]"
  >
    <div class="header-inner">
      <!-- BACK BUTTON -->
      <button
        type="button"
        class="btn btn-hd-icon btn-back"
        onclick="history.go(-1);"
      >
        뒤로가기
        <i class="icon icon-back" />
      </button>
      <!-- END BACK BUTTON -->
      <!-- HD-LOGO -->
      <h1 class="hd-logo">
        <a
          href="javascript:void(0)"
          class="link"
          @click="$router.push('/')"
        >
          <img
            src="~@/assets/images/logo/logo_bk.svg"
            alt="포켓컴퍼니 모바일 로고"
            class="logo-img"
          >
        </a>
      </h1>
      <!-- END HD-LOGO -->
      <!-- HD-TITLE -->
      <p class="hd-ttl">
        {{ hdTitle }}
      </p>
      <!-- END HD-TITLE -->
      <!-- ALERT BUTTON -->
      <!-- TODO: btn-alert에 is-new 붙으면 새 메세지 -->
      <button
        type="button"
        class="btn btn-hd-icon btn-alert is-new"
        @click="$router.push('/alarm')"
      >
        알림
        <i class="icon icon-alert" />
      </button>
      <!-- END ALERT BUTTON -->
      <!-- EDIT BUTTONS -->
      <div class="btn-edit-grp">
        <a
          href="#"
          class="btn btn-hd-icon btn-write"
        >
          작성하기
          <i class="icon icon-write-gray" />
        </a>
        <button
          type="button"
          class="btn btn-hd-icon btn-delete"
        >
          삭제하기
          <i class="icon icon-trash-gray" />
        </button>
      </div>
      <!-- END EDIT BUTTONS -->
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
