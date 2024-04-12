import {createStore} from "vuex";
import axiosClient from "../axios";


const store = createStore({
  state:{
    user:{
      data:{
       /* name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     */ },
      token: sessionStorage.getItem("TOKEN" ),

    }

  },
  getters:{},
  actions:{
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data.user);
          commit('setToken', data.token)
          return data;
        })
    },
    login({commit}, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data.user);
          commit('setToken', data.token)
          return data;
        })
    },

  },
  mutations:{
    logout: (state)=>{
      state.user.token=null;
      state.user.data={};
      sessionStorage.removeItem("TOKEN")
   },
    setUser: (state, user) => {
      state.user.data = user;
    },
    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem("TOKEN", token);
    },
  },
  modules:{
  }


})
export default store;
