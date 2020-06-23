<template>
  <div id="app">
    <h2>ログイン</h2>
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
    <button @click="login">
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
    login() {
      this.$store.dispatch('login' , {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>
