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
            <!-- icon button -->
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-icon btn-back"
                onclick="history.go(-1);"
              >
                뒤로가기
                <i class="icon icon-back" />
              </button>
            </div>
            <!-- END icon button -->
            <!-- button -->
            <div class="btn-grp">
              <button
                type="button"
                class="btn btn-md btn-gra"
              >
                pradiant
              </button>
              <button
                type="button"
                class="btn btn-md btn-main"
              >
                main
              </button>
              <button
                type="button"
                class="btn btn-md btn-sub"
              >
                sub
              </button>
            </div>
            <!-- END button -->
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
