<template>
  <div id="app">
    <h2>登録</h2>
    <label for="email">Email：</label>
    <input
      id="email"
      v-model="email"
      type="email"
    >
    <br><br>
    <label for="password">パスワード：</label>
    <input
      id="password"
      v-model="password"
      type="password"
    >
    <br><br>
    <button @click="register">
      送信
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>
