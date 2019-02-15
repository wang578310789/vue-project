<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="area">
        <p class="title">当前城市</p>
        <div class="content">
          <div class="btn current">{{this.$store.state.city}}</div>
        </div>
      </div>

      <div class="area">
        <p class="title">热门城市</p>
        <div class="content">
          <div 
          @click="handleClick(item.name)"
          class="btn" v-for="(item,index) of hotCities" :key="index">{{item.name}}</div>
        </div>
      </div>
      <!-- 列表城市 -->
      <div class="area" v-for="(item,index) of cities" :key="index">
        <p class="title" :ref="index">{{index}}</p>
        <div 
        @click="handleClick(city.name)"
        class="list-city" v-for="(city,inx) of item" :key="inx">{{city.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: ["hotCities", "cities"],
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  computed:{
    letter(){
      return this.$store.state.letter
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  methods:{
    handleClick(city){
      this.$store.commit('changeCity',city);
      this.$router.push("/")
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
    margin-top: 189px;
    height:1000px;
    position: relative;
    overflow: hidden;
}
.title {
  padding-left: 20px;
  line-height: 60px;
  background: #eee;
}
.btn {
  width: 200px;
  height: 54px;
  border-radius: 10px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 54px;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 20px;
  grid-row-gap: 20px;
}
.list-city {
  padding-left: 20px;
  line-height: 70px;
  border-bottom: 1px solid #ccc;
}
.current{
  background: #eee;
}
</style>
