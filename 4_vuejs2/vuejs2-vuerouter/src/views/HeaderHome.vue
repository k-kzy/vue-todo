<template>
  <nav>
    <h2>Home</h2>
    <router-link
      to="/"
      active-class="link--active"
      exact
      class="link"
    >
      Home
    </router-link>
    <router-link
      :to="{ name: 'users-id-profile', params: { id: 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
      exact
      active-class="link--active"
      class="link"
    >
      Users
    </router-link>
    <button @click="increment(2)">
      +1
    </button>
    <button @click="decrement(2)">
      -1
    </button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions("count", ["increment", "decrement"])
  }
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>
