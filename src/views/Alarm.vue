<template>
  <div
    id="page"
    class="page alarm-page"
  >
    <!-- header -->
    <layout-header
      hd-type="type5"
      hd-title="알림"
    />
    <div class="page-container">
      <banner-slide />
      <!-- content -->
      <div class="l-center">
        <div
          id="item_content"
          class="alarm-list-wrap"
        >
          1
          <!-- FIXME: 변수명 맞춰서 변경하기 -->
          <!-- <div
            v-for="item in items"
            :key="item.oi_no"
            class="alarm-card "
            :class="{ is-new: x.aal_read == 0 }"
            onclick="goContents(${x.aal_no}, '${x.aal_category}');"
          >
            <p class="category">
              {{ x.aal_category }}
            </p>
            <p class="ttl">
              {{ x.aal_title }}
            </p>
            <p class="state-msg">
              {{ x.aal_content }}
            </p>
            <div class="date-grp">
              <p class="date">
                {{ new Date(x.reg_dt).toLocaleDateString() }}
              </p>
            </div>
          </div> -->
        </div>
      </div>
      <!-- END content -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alarm',
};
</script>

<style lang="scss" scoped>
</style>
