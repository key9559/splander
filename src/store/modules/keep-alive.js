export default {
  state: {
    /* Router의 routes에 있는 항목의 name에 지정된 이름 사용 (파일명, 경로 아님) */
    keepAlive: [],
  },
  getters: {
    keepAlive: (state) => state.keepAlive,
  },
  mutations: {
    setKeepAlive(state, payload) {
      state.keepAlive = payload;
    },
  },
  actions: {
    keep({ state, commit }, payload) {
      if (!state.keepAlive.includes(payload)) {
        commit('setKeepAlive', state.keepAlive.concat([payload]));
      }
    },
    unkeep({ state, commit }, payload) {
      commit(
        'setKeepAlive',
        state.keepAlive.filter((x) => x !== payload),
      );
    },
    clearKeep({ state, commit }) {
      commit('setKeepAlive', []);
    },
  },
};
