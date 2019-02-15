<template>
    <div class="navbar">
        <router-link
        tag="i"
        to="/"
         class="iconfont bg">&#xe602;</router-link>
        <p>城市选择</p>
    </div>
</template>
<script>
export default {
    name:"CityHead"
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/global.scss";
.navbar{
    width:100%;
    position: fixed;
    left:0;
    top:0;
    height:88px;
    background:color(bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.534);
    .bg{
        left:0;
        font-size: 40px;
        color:#fff;
        position:absolute;
        top:50%;
        transform: translateY(-50%)
    }
}
</style>
