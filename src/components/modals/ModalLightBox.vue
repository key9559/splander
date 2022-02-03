<template>
  <span
    class="modal-light-box"
    @click="click"
  />
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>