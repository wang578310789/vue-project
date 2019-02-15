<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item) of banner" :key="item.index">
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        /* 是否循环 */
        loop: true,
        autoplay: {
          delay: 4000,
          /* 触碰后自动切换是否停止 */
          disableOnInteraction: false
        }
      }
    };
  }
};
</script>
<style  scoped>
.swiper-img {
  width: 100%;
  height: 300px;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>
