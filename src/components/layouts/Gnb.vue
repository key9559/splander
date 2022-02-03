<template>
  <div class="pk-gnb">
    <router-link
      to="/signal"
      class="gnb-link signal"
      :class="{active : active1}"
    >
      <i class="icon icon-signal" />
      SIGNAL
    </router-link>
    <router-link
      :to="`/`"
      class="gnb-link todo"
      :class="{active : active2}"
    >
      <i class="icon icon-todo" />
      TO DO
    </router-link>
    <router-link
      to="/idea"
      class="gnb-link idea"
      :class="{active : active3}"
    >
      <i class="icon icon-idea" />
      IDEA
    </router-link>
    <router-link
      to="/mypage"
      class="gnb-link mypage"
      :class="{active : active4}"
    >
      <i class="icon icon-mypage" />
      MY PAGE
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Gnb',
  props: {
    active1: {
      type: Boolean,
      default: false,
    },
    active2: {
      type: Boolean,
      default: false,
    },
    active3: {
      type: Boolean,
      default: false,
    },
    active4: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
