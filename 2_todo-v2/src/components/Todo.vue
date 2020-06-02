<template>
  <div :class="$style.wrap">
    <Header />
    <TodoInput />
    <!-- <TodoItem /> -->
    <!-- <TodoParam /> -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import TodoInput from './TodoInput.vue';
// import TodoItem from './TodoItem.vue';
// import TodoParam from './TodoParam.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    TodoInput,
    // TodoItem,
    // TodoParam,
    Footer,
  },
};
</script>

<style lang="scss" module>
body {
  background-color: #f5f5f5;
}
.wrap {
  margin: 0 auto;
  width: 550px;
}
</style>
