<template>
  <!-- 배너 슬라이드 -->
  <div class="banner-wrap">
    <div
      v-swiper:bannerSwiper="swiperOption"
      class="swiper banner-swiper"
    >
      <div
        id="app_event_form"
        class="swiper-wrapper"
      >
        <div
          v-for="item in items"
          :key="item.ae_no"
          class="swiper-slide"
          @click="$router.push(`/event-detail/${item.ae_no}`)"
        >
          <div class="banner-img-grp">
            <img
              :src="`${item.ae_thumb[0]}`"
              :alt="`event-${index}`"
              class="img"
            >
          </div>
        </div>
        <!-- END 실제 적용되는 부분 -->
      </div>
      <div class="page-btn-wrap">
        <div class="swiper-pagination banner-pagination" />
        <button
          type="button"
          class="btn btn-all-view"
          @click="$router.push('/event')"
        >
          모두보기
        </button>
      </div>
    </div>
  </div>
  <!-- END 배너 슬라이드 -->
</template>

<script>
export default {
  name: 'BannerSlide',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
        },
        speed: 500,
        loop: true,
        pagination: {
          el: '.banner-pagination',
          type: 'fraction',
        },
      },
      search: {
        offset: 0,
        limit: 10,
      },
      items: [],
    };
  },
  created () {
    this.fetchData();
  },
  methods: {
    async fetchData (reset = false) {
      if (reset) this.search.offset = 0;
      try {
        const data = await this.$axios
          .get('/v1/user/app_event', {
            params: {
              offset: this.search.offset,
              limit: this.search.limit,
            },
          })
          .then(res => res.data.query);
        if (reset) this.items = data;
        else this.items = this.items.concat(data);
        this.search.offset += data.length;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
