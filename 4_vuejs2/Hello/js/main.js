var app = new Vue({
  el: '#app',
  data: {
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' },
    ]
  },
  watch: {
    colors: {
      handler(newValue, oldValue) {
        console.log('Update!')
        console.log('new: %s, oldValue: %s',
          JSON.stringify(newValue, null, '\t'),
          JSON.stringify(oldValue, null, '\t'),)
      },
      deep: true,
      immediate: true
    }
  }
});
