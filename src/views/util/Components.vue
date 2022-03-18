<template>
  <div
    id="page"
    class="pagename"
  >
    <!-- content area -->
    <div class="page-container components-page">
      <div class="l-center">
        <!-- 버튼 -->
        <section class="section">
          <h1 class="cp-ttl">
            1. 버튼
          </h1>
          <div class="section-cont">
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-main btn-rounded btn-md btn-full"
              >
                로그인하기
              </button>
            </div>
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-white-border btn-rounded btn-md btn-full"
              >
                회원가입
              </button>
            </div>
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-apple btn-rounded btn-md btn-full btn-social"
              >
                <i class="icon icon-apple" />
                Apple로 로그인
              </button>
            </div>
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-kakao btn-rounded btn-md btn-full btn-social"
              >
                <i class="icon icon-kakao" />
                카카오 로그인
              </button>
            </div>
            <!-- 토글 스위치 -->
            <div>
              <input
                id="switch"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="switch"
                class="toggle-onoff"
              />
            </div>
            <!-- // 토글 스위치 -->
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-white-border-gray btn-xsm btn-rounded-sm"
              >
                <i class="icon icon-write" />
                글 작성
              </button>
            </div>
          </div>
        </section>
        <!-- END 버튼 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components',
};
</script>

<style lang="scss" scoped>
.components-page {
  padding-bottom: 100px;
  .cp-ttl {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .section {
    border-bottom: 1px solid #ebebeb;
    padding: 20px 0;
  }
  .section-cont {
    padding: 10px 0;
  }
}
</style>
