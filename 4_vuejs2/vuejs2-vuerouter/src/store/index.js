import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// Vuex インスタンス
export default new Vuex.Store({
  state: {
    message: ''
  },
  getters,
  mutations,
  actions,
  modules: {
    count
  }
})
