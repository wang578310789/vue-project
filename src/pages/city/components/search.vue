<template>
  <div>
    <div class="content">
      <input type="text" v-model="keyword" placeholder="输入你要搜索的城市">
    </div>
    <div class="search-content" v-if="keyword">
        <ul>
            <li class="item" 
            @click="handleClick"
            v-for="(item,index) of list" :key="index">{{item.name}}</li>
            <li class="item" v-show="!hasNoData">没有更多的数据</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch",
  props: ["cities"],
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  computed:{
      hasNoData(){
          return this.list.length;
      }
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.list = [];
        return;
      }
      var result = [];
      for (let i in this.cities) {
        this.cities[i].forEach(value => {
          /* 判断cities中是否包含这个关键词 */
          if (
            value.name.startsWith(this.keyword) ||
            value.spell.startsWith(this.keyword)
          ) {
            result.push(value);
          }
        });
      }
      this.list = result;
    }
  },
  methods:{
    handleClick(event){
      this.$store.commit("changeCity",event.target.innerText);
      this.$router.push('/');
      this.keyword = ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style/global.scss";
.content {
  position: fixed;
  width: 100%;
  top: 89px;
  height: 88px;
  display: flex;
  background: color(bg);
  align-items: center;
  justify-content: center;
  input {
    border: 1px solid #eee;
    border-radius: 15px;
    outline: none;
    font-size: 14px;
    padding-left: 20px;
    height: 66px;
    width: 92%;
  }
}
.search-content{
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    top:176px;
    z-index: 400;
    overflow: hidden;
    background: #fff;
    
}
.item{
    line-height: 50px;
    border-bottom: 1px solid #eee;
    padding-left:20px;
}
</style>
