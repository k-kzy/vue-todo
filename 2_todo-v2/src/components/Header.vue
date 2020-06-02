<template>
  <header :class="$style.header">
    <h1 :class="$style.header__text">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Todo App',
    };
  },
};
</script>

<style lang="scss" module>
.header {
  margin: 0 auto 50px;
}

.header__text {
  color: rgba(28, 25, 25, 0.15);
  font-size: 100px;
  text-align: center;
}
</style>
