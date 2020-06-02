<template>
  <footer :class="$style.footer">
    <div :class="$style.footer__text">by <a :href="setUrl" target="_blank">k-kzy</a></div>
  </footer>
</template>

<script>
export default {
  computed: {
    setUrl() {
      return 'https://github.com/k-kzy';
    },
  },
};
</script>

<style lang="scss" module>
.footer {
  margin-top: 50px;
}

.footer__text {
  color: #3a3a3a26;
  text-align: center;
}

.footer__text > a {
  color: #555;
}

.footer__text > a:hover {
  opacity: 0.3;
  text-decoration: none;
}
</style>
