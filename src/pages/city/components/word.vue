<template>
    <div>
        <ul class="nav">
            <li 
            @click="handleClick"
            v-for="(item,index) of cities" :key="index">{{index}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"CityWord",
    props:['cities'],
    methods:{
        handleClick(event){
             this.$store.commit('changeLetter',event.target.innerText);
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'style/global.scss';
.nav{
    position: fixed;
    width:50px;
    right:0;
    top:200px;
    color:color(bg);
    li{
        text-align: center;
        line-height: 50px;
    }
}
</style>
