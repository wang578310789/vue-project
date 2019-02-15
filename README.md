## 1.给search.vue的list绑定事件

~~~
<ul>
            <li class="item" 
            @click="handleClick"
            v-for="(item,index) of list" :key="index">{{item.name}}</li>
            <li class="item" v-show="!hasNoData">没有更多的数据</li>
</ul>
~~~

## 2.通过事件向store传递参数,并跳转到首页

~~~
methods:{
    handleClick(event){
      this.$store.commit("changeCity",event.target.innerText);
      this.$router.push('/');
      this.keyword = ""
    }
}
~~~

## 3.在store.js接收数据

~~~
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city:"天门"
  },
  mutations: {
    changeCity(state, city) {
      //state表示state属性中的数据
      state.city = city;
    },
  }
})

~~~

## 4.在首页的组件head.vue中显示数据

~~~
this.$store.state.city//显示数据
~~~



~~~
<router-link tag="div" to="city" class="city">
      <p>{{this.$store.state.city}}</p>
      <i class="iconfont down">&#xe62b;</i>
</router-link>
~~~

## 5.给list.vue组件中的按钮绑定事件

~~~
<div class="area">
        <p class="title">热门城市</p>
        <div class="content">
        /* ++热门城市添加点击事件*/
          <div 
          @click="handleClick(item.name)"
          class="btn" v-for="(item,index) of hotCities" :key="index">{{item.name}}</div>
        </div>
</div>
      <!-- 列表城市 -->
<div class="area" v-for="(item,index) of cities" :key="index">
        <p class="title" :ref="index">{{index}}</p>
        <div 
        /* ++列表城市添加点击事件*/
        @click="handleClick(city.name)"
        class="list-city" v-for="(city,inx) of item" :key="inx">{{city.name}}</div>
</div>
~~~

~~~
methods:{
    handleClick(city){
      this.$store.commit('changeCity',city);
      this.$router.push("/")
    }
}
~~~

