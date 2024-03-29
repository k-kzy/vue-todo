import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import router from '../router'
import axiosRefresh from '../axios-refresh'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null
  },

  getters: {
    idToken: state => state.idToken
  },

  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken
    }
  },

  actions: {
    async autoLogin({ commit, dispatch }) {
      console.log('autologin')
      const idToken = localStorage.getItem('idToken')
      if (!idToken) return
      const now = new Date()
      const expiryTimeMs = localStorage.getItem('expiryTimeMs')
      const isExpired = now.getTime() >= expiryTimeMs
      const refreshToken = localStorage.getItem('refreshToken')
      if (isExpired) {
        await dispatch('refreshIdToken', refreshToken)
      } else {
        const expiresInMs = expiryTimeMs - now.getTime()
        setTimeout(() => {
          dispatch('refreshIdToken', refreshToken)
        }, expiresInMs)
        commit('updateIdToken', idToken)
      }
    },

    login({ dispatch }, authData) {
      axios
        .post('/accounts:signInWithPassword?key=AIzaSyChx7ewmPf44wtD7FxBEoj3Y0GaaM7XpcU',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        })
        router.push('/')
      })
    },

    logout({ commit }) {
      commit('updateIdToken', null)
      localStorage.removeItem('idToken')
      localStorage.removeItem('expiryTimeMs')
      localStorage.removeItem('refreshToken')
      router.push('/login')
    },

    async refreshIdToken({ dispatch }, refreshToken) {
      await axiosRefresh
        .post('/token?key=AIzaSyChx7ewmPf44wtD7FxBEoj3Y0GaaM7XpcU', {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        })
        .then(response => {
          dispatch('setAuthData', {
            idToken: response.data.id_token,
            expiresIn: response.data.expires_in,
            refreshToken: response.data.refresh_token,
          })
        })
    },

    register({ dispatch }, authData) {
      axios
        .post('/accounts:signUp?key=AIzaSyChx7ewmPf44wtD7FxBEoj3Y0GaaM7XpcU',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        })
        router.push('/')
      })
    },

    setAuthData({ commit, dispatch }, authData) {
      const now = new Date()
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000 // 有効期限が切れる時の秒数
      commit('updateIdToken', authData.idToken)
      localStorage.setItem('idToken', authData.idToken)
      localStorage.setItem('expiryTimeMs', expiryTimeMs)
      localStorage.setItem('refreshToken', authData.refreshToken)
      // 一時間後にトークン更新
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken)
      }, authData.expiresIn * 1000)
    }
  }
})
