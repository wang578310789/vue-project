<template>
  <div>
    <div v-for="(item,index) of categoryList" :key="index">
      <div class="item">
        <span class="icon"></span>
        <span>{{item.title}}</span>
      </div>

      <div v-if="item.children" class="child-item">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailList",
  props: {
    categoryList: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
@import "style/global.scss";
.icon {
  width: 50px;
  height: 50px;
  display: block;
  background: url("~@/assets/icon/detail.png") no-repeat;
  background-size: 50px;
  background-position: 5px -52px;
}
.item {
    margin-left: 20px;
    height: 80px;
  @include flexCenter;
  border-bottom: 1px solid #eee;
}
.child-item{
    margin-left: 20px;
}
</style>
