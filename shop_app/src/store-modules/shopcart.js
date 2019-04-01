
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cart_count: 0,
  },
  mutations: {
    change_cart_count(state, cart_count) {
      state.cart_count = cart_count;
    },
    add_cart_count(state, to_add) {
      state.cart_count += to_add;
    },
  },
  actions: {
    init_shopcart({ state, commit, rootState }) {
      axios.get('./static/mockdata/images.json').then((resp) => {
        commit('change_cart_count', resp.data.records.length)
      });
    }
  }
}
