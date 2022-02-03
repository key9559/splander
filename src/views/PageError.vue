<template>
  <div class="page login-page error-page">
    <div class="page-container">
      <div class="bg-wrap" />
      <div class="obj-circle-wrap" />
      <div class="error-cont-wrap">
        <div class="error-cont-grp">
          <p class="error-ttl">
            404 NOT FOUND
          </p>
          <p class="error-dec">
            페이지를 찾을 수 없습니다. <br>요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
          </p>
          <div
            class="btn-grp"
          >
            <button
              type="button"
              class="btn btn-main btn-rounded btn-md btn-210"
              @click="$router.push('/')"
            >
              홈으로
            </button>
          </div>
        </div>
      </div>
      <div class="bg-wrap type-bottom" />
      <div class="obj-circle-wrap type-bottom" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageError',
};
</script>

<style lang="scss" scoped>
</style>