import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import keepAlive from './modules/keep-alive';
import settings from './modules/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alertModal: {
      isPopupVisible: false,
      title: '',
      message: '',
      onClose: () => {},
    },
    confirmModal: {
      isPopupVisible: false,
      title: '',
      message: '',
      onConfirm: () => {},
      onCancel: () => {},
    },
    loading: {
      isVisible: false,
    },
    modal: { // 페이지에 맞는 팝업
      visible: false,
      type: null,
    },
  },
  mutations: {
    setIsalertModal (state, payload) {
      state.alertModal = payload;
    },
    setIsconfirmModal (state, payload) {
      state.confirmModal = payload;
    },
    setIsVisibleLoading (state, payload) {
      state.loading.isVisible = payload;
    },
    setIsModal (state, payload) {
      state.modal = payload;
    },
  },
  actions: {
    toggleAlert ({ commit }, payload) {
      commit('setIsalertModal', payload);
    },
    toggleConfirm ({ commit }, payload) {
      commit('setIsconfirmModal', payload);
    },
    toggleLoading ({ commit }, payload) {
      commit('setIsVisibleLoading', payload);
    },
    toggleModal ({ commit }, payload) {
      commit('setIsModal', payload);
    },
  },
  modules: {
    user,
    keepAlive,
    settings,
  },
});
