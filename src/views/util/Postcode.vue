<template>
  <div
    id="layer"
    ref="layer"
    style="position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;"
  />
</template>

<script>
export default {
  name: 'UtilPostcode',
  data () {
    return {};
  },
  mounted () {
    try {
      window.daum.postcode.load(() => {
        new window.daum.Postcode({
          oncomplete: (data) => {
            this.viewClose({
              name: 'postcode',
              payload: { postcode: data.zonecode, address: data.address },
            });
          },
          width: '100%',
          height: '100%',
        }).embed(document.getElementById('layer'));
      });
    } catch (e) {
      this.alert(e);
    }
  },
};
</script>

<style>
</style>
