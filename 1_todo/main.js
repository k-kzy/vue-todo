var STORAGE_KEY = 'vue-todo';
var todoStorage = {
  fetch() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index;
    })
    todoStorage.uid = todos.length
    return todos
  },

  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}


new Vue({
  el: '#app',
  data: {
    todos: [],
    current: -1,
    options: [
      { value: -1, label: 'すべて' },
      { value: 0, label: '作業中' },
      { value: 1, label: '削除' },
    ],
  },

  computed: {
    computedTodos() {
      return this.todos.filter(function(el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    },
  },

  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
  // ↓Vue インスタンス作成時発火
  created() {
    this.todos = todoStorage.fetch()
  },
  methods: {
    doAdd(event, value) {
      var comment = this.$refs.comment;
      if( !comment.value.length) return;

      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })

      comment.value = '';
    },

    doChangeState(item) {
      item.state = item.state ? 0 : 1;
    },

    doRemove(item) {
      var index = this.todos.indexOf(item);
      this.todos.splice(index, 1);
    }
  },
})
