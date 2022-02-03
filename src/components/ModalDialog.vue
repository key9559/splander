<template>
  <div
    class="modal-wrapper"
    :class="{'is-show': $store.state.modal.visible}"
  >
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
</style>