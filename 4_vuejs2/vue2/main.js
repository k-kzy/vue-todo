var data = {
  message: 'こんにちは',
  name: 'よしぴー'
}

Vue.component('hello', {
  data() {
    return {

    }
  },
  template: '<p>hello</p>'
})

var vm = new Vue ({
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  },
})

vm.$mount('#app')

new Vue({
  data: {
    name: 'よしぴー'
  },
  template: '<h1>こんにちは、{{name}}</h1>'
}).$mount('#app2')


new Vue({
  data: {
    name: 'よしぴー'
  },
  render(h) {
    return h('h1', 'こんにちは！！！' + this.name);
  },
}).$mount('#app3')

var dir = document.createElement('div')
console.log(dir)
console.dir(dir)
console.log(document)
console.dir(document)

new Vue({
  el: '#app4',
  data: {
    name: 'よしぴー'
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    destroy() {
      this.$destroy() // Vue JS のロジックを破壊する
    }
  }
})

