<template>
  <div class="gallary" @click="handleClick">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "DetailGallary",
  props:{
    swiperList:{
      type:Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        /* 是否循环 */
        loop: true,
        autoplay: false,
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleClick() {
      this.$emit("toggle");
    }
  }
};
</script>
<style lang="scss" scoped>
.gallary {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #333;
  z-index: 1;
}
.swiper-img {
  width: 100%;
  height: 300px;
}
.swiper-container {
  top: 50%;
  transform: translateY(-50%);
}
.swiper-pagination {
  bottom: -50px;
  color: #fff;
}
.gallary >>> .swiper-container {
  overflow: inherit;
}
</style>
