import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      email: "",
    };
  },
  getters: {},
  mutations: {
    setEmail(email) {
      this.state.email = email;
    },
  },
  actions: {},
  modules: {},
});
