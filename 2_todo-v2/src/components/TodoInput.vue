<template>
  <div>
    <input v-model="newTodo" placeholder="タスク追加する？" :class="$style.todoInput" @keyup.enter="addTodo()" />
  </div>
</template>

<script>
import todoStorage from '../js/todoStorage';

export default {
  data() {
    return {
      newTodo: '',
      todos: todoStorage.fetch(),
    };
  },
  watch: {
    todos: {
      handle(todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
  methods: {
    addTodo() {
      const value = this.newTodo.trim();
      if (!value) {
        return;
      }

      this.todos.push({
        id: todoStorage.uid + 1,
        title: value,
        completed: false,
      });

      this.newTodo = '';
    },
    remove(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>

<style lang="scss" module>
.todoInput {
  background-color: #fff;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  height: 50px;
  padding: 15px;
  width: 100%;
}

.todoInput::placeholder {
  color: #e7e7e7;
}
</style>
