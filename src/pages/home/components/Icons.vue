<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="icons">
        <div class="icon" v-for="(item) of page" :key="item.id">
          <img :src="item.imgUrl" alt>
          <p>{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    icons: {
      type: Array
    }
  },
  computed: {
    pages() {
      let pages = [];
      for (let i = 0; i < this.icons.length / 8; i++) {
        pages[i] = this.icons.slice(8 * i, 8 * (i + 1));
      }
      return pages;
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.icons {
  font-size: 16px;
  width: 100%;
  height: 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 25vw 25vw;
  align-items: center;
  justify-items: center;
  text-align: center;
  img {
    width: 110px;
    height: 110px;
  }
  border-bottom: 1px solid #eee;
}
</style>

