import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    letter:"a",
    city:"天门"
  },
  mutations: {
    changeLetter(state, letter) {
      //state表示state属性中的数据
      state.letter = letter
    },
    changeCity(state, city) {
      //state表示state属性中的数据
      state.city = city;
    },
  },
  actions: {
    // changeLetter(ctx, letter) {
    //   ctx.commit('changeLetter', letter)
    // }
  }
})
