var app = new Vue({
  el: '#js-app',
  data: {
    items: null,
    keyword: '',
    message: ''
  },
  watch: {
    keyword(newKeword, oldKeyword) {
      // console.log(oldKeyword)
      this.message = 'Waiting for you stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created() {
    // this.keyword = 'Vue.js'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer() {
      if(this.keyword === '') {
        this.items = ''
        this.message = ''
        return
      }

      this.message = 'Loading...'
      var vm = this

      var params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response){
        vm.items = response.data
      })
      .catch(function(error) {
        vm.message = 'Error' + error
      })
      .finally(function() {
        vm.message = ''
      })
    }
  },
});
