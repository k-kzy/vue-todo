import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-a41d9/databases/(default)/documents"

const interceptorsRequest = axios.interceptors.request.use(
  request => {
    console.log('interceptors request', request)
    return request;
  },
  error => {
    return Promise.reject(error)
  }
)

const interceptorsResponse = axios.interceptors.response.use(
  response => {
    console.log('interceptors response', response)
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

// request use 処理除去
axios.interceptors.request.eject(interceptorsRequest)
axios.interceptors.response.eject(interceptorsResponse)

store.dispatch('autoLogin').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
})

