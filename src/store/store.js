import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
    ],
    token: ''
  },
  mutations: {
    LOGIN_MUT(state, payload) {
      state.token = payload;
    },
    TASKS_MUT(state, payload) {
      if (typeof payload === "string") {
        return
      }
      state.tasks = payload
    },
    TASKS_CLEAR_MUT(state){
      state.tasks = [];
    }
  },
  actions: {
    REGISTRATION_ACTION(ctx, payload) {
      return axios
        .post("http://frontapi.3jz.ru/api/registration/", { "login": payload.login, "password": payload.password, "phone": payload.phone })
        .then((resp) => {
          return resp
        })
        .catch((e) => {
          console.log(e);
          throw e
        });
    },
    LOGIN_ACTION(ctx, payload) {
      return axios
        .post("http://frontapi.3jz.ru/api/login/", { "login": payload.login, "password": payload.password, "phone": payload.phone })
        .then((resp) => {
          ctx.commit('LOGIN_MUT', resp.data.token)
          ctx.dispatch('TASKS_ACTION', resp.data.token)
        })
        .catch((e) => {
          console.log(e);
          throw e
        });
    },
    LOGOUT_ACTION(ctx, payload) {
      return axios
        .post("http://frontapi.3jz.ru/api/logout/", { "token": payload })
        .then((resp) => {
          ctx.commit('LOGIN_MUT', '')
          ctx.commit('TASKS_CLEAR_MUT')
          return resp
        })
        .catch((e) => {
          console.log(e);
          throw e
        });
    },
    CREATE_TASK_ACTION(ctx, payload) {
      return axios
        .post("http://frontapi.3jz.ru/api/create_task/", {
          "token": this.getters.TOKEN_GETT,
          'task_info': {
            "name": payload.name,
            "text_task": payload.text
          }
        })
        .then((resp) => {
          ctx.dispatch('TASKS_ACTION', this.getters.TOKEN_GETT)
          return resp
        })
        .catch((e) => {
          console.log(e);
          throw e
        });
    },
    TASKS_ACTION(ctx, payload) {
      return axios
        .post("http://frontapi.3jz.ru/api/get_tasks/", { "token": payload || this.getters.TOKEN_GETT })
        .then((resp) => {
          ctx.commit('TASKS_MUT', resp.data.message)
          return resp
        })
        .catch((e) => {
          console.log(e);
          throw e
        });
    },
  },
  getters: {
    TASKS_GETT(state) {
      return state.tasks
    },
    TOKEN_GETT(state) {
      return state.token
    },
  },
  modules: {
  }
})
