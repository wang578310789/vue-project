<template>
    <div>
        <h4 class="title">周末去哪儿</h4>
        <div v-for="item of weekendList" :key="item.id" class="item">
            <img :src="item.imgUrl"/>
            <p class="c-title">{{item.title}}</p>
            <p class="c-content">{{item.content}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeWeekend",
    props:{
        weekendList:{
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>
.title{
    padding:20px;
    background: #eee;
}
.item{
    img{
        height: 300px;
        width:100%;
    }
    border-bottom: 1px solid #eee;
    .c-title{
        font-weight: bold;
        margin-left: 20px;
        margin-top: 10px;
    }
    .c-content{
        margin-top: 10px;
        color:#999;
        margin-left: 20px;
        margin-bottom: 10px;
    }
}
</style>
