<template>
  <div class="head">
    <i class="iconfont back">&#xe602;</i>
    <div class="search-input">
      <i class="iconfont search">&#xe6a8;</i>
      <p>输入游玩的景点和城市</p>
    </div>
    <router-link tag="div" to="city" class="city">
      <p>{{this.$store.state.city}}</p>
      <i class="iconfont down">&#xe62b;</i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHead"
};
</script>
<style lang="scss" scoped>
@mixin padding-lr($pd) {
  padding-left: $pd;
  padding-right: $pd;
}
.head {
  height: 88px;
  background: #03bbd5;
  display: flex;
  align-items: center;
}
.search-input {
  display: flex;
  height: 66px;
  background: #fff;
  flex: 1;
  align-items: center;
  color: rgb(168, 168, 167);
  .search {
    font-size: 30px;
    @include padding-lr(20px);
  }
  border-radius: 15px;
}
.back {
  @include padding-lr(10px);
  font-size: 56px;
  color: #fff;
}

.city {
  display: flex;
  align-items: center;
  @include padding-lr(20px);
  color: #fff;
  .down {
    font-size: 20px;
    padding-left: 10px;
  }
}
</style>
