<template>
    <div class="loading">
        <img src="../loading/loading.gif" alt="">
        <span>正在加载中</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.loading{
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    align-items: center;
    transform: translate(-50%,-50%);
}
span{
    font-size: 40px;
}
</style>
