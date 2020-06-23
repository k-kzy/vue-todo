// グローバル コンポーネント
Vue.component('list-title', {
  template: `
    <div>List Title です</div>
  `
})

Vue.component('list-description', {
  template: `
    <div><list-title></list-title></div>
  `
})

Vue.component('list-table', {
  template: `
    <div>List table です</div>
  `
})

var app = new Vue({
  el: '#app'
})
