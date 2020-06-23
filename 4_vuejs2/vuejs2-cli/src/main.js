import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.filter('upperCase', (value) => {
  console.log('filter | upperCase')
  return value.toUpperCase()
});
Vue.mixin({
  created() {
    console.log("global mixin")
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
