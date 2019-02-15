<template>
  <div>
    <h4 class="hot-title">热门推荐</h4>
    <router-link
      tag="div"
      :to="'/detail/'+item.id"
      v-for="item of recommendList"
      :key="item.id"
      class="item"
    >
      <img :src="item.imgUrl" alt>
      <div class="content">
        <p class="title">{{item.title}}</p>
        <p class="c-content">{{item.content}}</p>
        <button>查看详情</button>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  font-size: 14px;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #eee;
  img {
    width: 150px;
    height: 150px;
    display: block;
  }
  button {
    width: 130px;
    height: 50px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #ff8300;
    background: #fff;
  }
}
.hot-title {
  padding: 20px;
  background: #eee;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  .title {
    font-weight: bold;
  }
  .c-content {
    color: #999;
  }
}
</style>
