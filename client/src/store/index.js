import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emailLogin: '',
    passwordLogin: '',
    access_token: localStorage.access_token,
    id: '',
    postDatas: [],
    toggleAdd: false,
    toggleEdit: false,
    toggleDelete: false,
  },
  mutations: {
    setEmail(state, payload) {
      state.emailLogin = payload;
    },
    setPassword(state, payload) {
      state.passwordLogin = payload;
    },
    setToken(state, payload) {
      state.access_token = payload;
    },
    removeToken(state) {
      state.access_token = '';
    },
    setPostDatas(state, payload) {
      state.postDatas = payload;
    },
    setTitle(state, payload) {
      state.title = payload;
    },
    setImage(state, payload) {
      state.image_url = payload;
    },
    setCaption(state, payload) {
      state.caption = payload;
    },
    setToggleAdd(state, payload) {
      state.toggleAdd = payload;
    },
    setToggleDelete(state, payload) {
      state.toggleDelete = payload;
    },
    setId(state, payload) {
      state.id = payload;
    },
  },
  actions: {
    getAll({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/posts/user',
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((response) => {
          console.log(response, 'masuk getAll');
          commit('setPostDatas', response.data);
        })
        .catch((error) => {
          console.log(error, 'failed set data');
        });
    },
    login({ commit, state }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: state.emailLogin,
          password: state.passwordLogin,
        },
      })
        .then((response) => {
          console.log(response, 'login success');
          localStorage.setItem('access_token', response.data.access_token);
          localStorage.setItem('avatar', response.data.avatar);
          localStorage.setItem('email', state.emailLogin);
          commit('setToken', localStorage.access_token);
          router.push('Posts');
        })
        .catch((error) => {
          console.log(error, 'login failed');
        });
    },
    logout({ commit }) {
      console.log('try to logout');
      localStorage.removeItem('access_token');
      commit('removeToken');
      router.push('/');
    },
    add({ dispatch }, payload) {
      console.log(payload, 'ini payload add');
      axios({
        method: 'POST',
        url: 'http://localhost:3000/posts',
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: payload.title,
          img: payload.image_url,
          caption: payload.caption,
        },
      })
        .then((response) => {
          console.log(response, 'data add');
          this.state.toggleAdd = false;
          dispatch('getAll');
        })
        .catch((error) => {
          console.log(error, 'add failed');
        });
    },
    addModal({ commit }) {
      commit('setToggleAdd', true);
    },
    modalEdit({ commit }) {
      commit('setToggleEdit', true);
    },
    modalDelete({ commit }) {
      commit('setToggleDelete', true);
    },
    delete({ state, dispatch }, payload) {
      console.log(payload, 'ini payload delete');
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/posts/${state.id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((response) => {
          console.log(response, 'data deleted');
          this.state.toggleDelete = false;
          dispatch('getAll');
        })
        .catch((error) => {
          console.log(error, 'delete failed');
        });
    },

  },
});
