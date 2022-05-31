import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state() {
    return {
      email: "",
      authenticated: false,
    };
  },
  getters: {},
  mutations: {
    setEmail(state, email) {
      state.email = email;
      state.authenticated = true;
    },
    logout(state) {
      localStorage.clear();
      state.email = "";
      state.authenticated = false;
    },
  },
  actions: {
    async setEmailAction(context, email) {
      return new Promise((resolve) => {
        localStorage.clear();
        context.commit("setEmail", email);
        resolve();
      });
    },
  },
  plugins: [vuexLocal.plugin],
  modules: {},
});
