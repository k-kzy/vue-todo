import './assets/scss/reset.scss';
import Vue from 'vue';
import Todo from './components/Todo.vue';
// import Store from './store';

new Vue({
  el: '#js-app',
  components: { Todo },
  // Store,
  template: '<Todo/>',
});
