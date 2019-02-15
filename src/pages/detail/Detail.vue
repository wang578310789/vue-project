<template>
  <div class="content">
    <img :src="bannerImg" class="banner" @click="handleClick">
    <div>
      <detail-nav v-if="isNav" :style="opacitys"></detail-nav>
      <router-link v-else tag="i" to="/" class="iconfont bg">&#xe8ef;</router-link>
    </div>
    <v-fade>
      <detail-gallary 
      slot="fade"
      :swiperList="gallaryImgs" 
      v-show="isGallary" 
      @toggle="hide"></detail-gallary>
    </v-fade>
    <detail-list :categoryList="categoryList"></detail-list>
  </div>
</template>
<script>
import { DetailModel } from "../../models/DetailModel";
import DetailGallary from "./components/gallary";
import DetailNav from "./components/nabar";
import VFade from "./components/Fade";
import DetailList from './components/List';
const detailModel = new DetailModel();
export default {
  name: "detail",
  data() {
    return {
      bannerImg: "",
      isGallary: false,
      gallaryImgs: [],
      isNav: false,
      opacitys: {
        opacity: 0
      },
      categoryList: []
    };
  },
  components: {
    DetailGallary,
    DetailNav,
    VFade,
    DetailList
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    var id = this.$route.params.id;
    detailModel.getDetail(id).then(res => {
      var data = res.data.data;
      this.bannerImg = data.bannerImg;
      this.gallaryImgs = data.gallaryImgs;
      this.categoryList = data.categoryList;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top > 0) {
        this.isNav = true;
        var opacity = top / 300;
        if (opacity > 1) {
          opacity = 1;
        }
        this.opacitys.opacity = opacity;
      } else {
        this.isNav = false;
      }
    },
    handleClick() {
      this.isGallary = true;
    },
    hide() {
      this.isGallary = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 400px;
}
.bg {
  font-size: 60px;
  position: absolute;
  left: 10px;
  top: 10px;
  color: rgb(148, 145, 145);
}
.content {
  height: 2000px;
}
</style>
