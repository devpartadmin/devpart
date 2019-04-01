import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shopcart: require('@/store-modules/shopcart').default
  },

  state: {
  },
  mutations: {
  },
  actions: {

  }
})
