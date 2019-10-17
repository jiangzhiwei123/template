import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    visible: {
      mask: true
    }
  },
  mutations: {
    CLOSE_POP(state) {
      state.visible.mask = false;
    },
    OPEN_POP(state) {
      state.visible.mask = true;
    }
  },
  actions: {}
});
