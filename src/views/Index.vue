<template>
  <div
    id="page"
    class="main-page"
  >
    <div class="l_center">
      <!-- content area -->
      <h1 class="board_ttl">
        게임방
      </h1>
      <ul class="room_list_wrap">
        <li class="room_list splander">
          <a
            href=""
            class="link"
            onclick="alert('방이 꽉 참')"
          >
            <span class="type">스플랜더 - 대도시</span>
            <span class="player">4 / 4</span>
          </a>
        </li>
        <li class="room_list splander">
          <a
            href="splander.html"
            class="link"
          >
            <span class="type">스플랜더</span>
            <span class="player">3 / 4</span>
          </a>
        </li>
        <li class="room_list splander">
          <a
            href=""
            class="link"
            onclick="alert('게임중')"
          >
            <span class="type">스플랜더 - 성채</span>
            <span class="player">3 / 4</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- END page -->
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style lang="scss" scoped>
</style>
