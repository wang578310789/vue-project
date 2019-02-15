<template>
  <div class="home">
    <div v-if="isLoading">
      <home-head></home-head>
      <home-swiper :banner="banner"></home-swiper>
      <home-icons :icons="icons"></home-icons>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
      <loading v-if="!isLoading"></loading>
  </div>
</template>

<script>

import HomeHead from './components/Head';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import {HomeModel} from "../../models/HomeModel";
import loading from "../../../loading/loading";
const homeModel = new HomeModel();
export default {
  name: 'home',
  components:{
    HomeHead,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    loading
  },
  data(){
    return {
      banner:[],
      icons:[],
      recommendList:[],
      weekendList:[],
      isLoading:false
    }
  },
  mounted(){
    homeModel.getHome().then(res=>{
      let data = res.data.data;
      let {banner,icons, recommendList,weekendList}=data;
      this.banner = banner;
      this.icons = icons;
      this.recommendList = recommendList;
      this.weekendList = weekendList;
      this.isLoading = true;
    })
  }
}
</script>
<style lang="scss" scoped>
.nav{
  width:375px;
  height:40px;
  background: red;
}
</style>

