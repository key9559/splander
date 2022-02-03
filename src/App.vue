<template>
  <div
    id="app"
    :class="{'is-disabled': $store.state.loading.isVisible}"
  >
    <loading-spinner v-show="$store.state.loading.isVisible" />
    <keep-alive :include="keepAlive">
      <router-view />
    </keep-alive>
    <confirm-dialog />
    <alert-dialog />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "~@/assets/styles/ui.scss";
</style>
