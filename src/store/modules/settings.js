import Vue from 'vue';

export default {
  state: {
    settings: {},
  },
  getters: {
    settings: (state) => state.settings,
  },
  mutations: {
    setSettings(state, payload) {
      state.settings = payload;
    },
  },
  actions: {
    async settingsLoad({ commit }) {
      const data = Object.fromEntries(
        await Vue.axios
          .get('/v1/user/settings')
          .then((res) => res.data.query)
          .then((x) => x.map((y) => [y.setting_key, y.setting_value])),
      );

      commit('setSettings', data);
    },
  },
};
