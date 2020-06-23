<template>
  <div id="app">
    <header class="header">
      <h1>Chat</h1>
      <!-- ログイン時にはフォームとログアウトボタンを表示 -->
      <div v-if="user.uid" key="login">
        [{{ user.displayName }}]
        <button type="button" @click="doLogout">ログアウト</button>
      </div>
      <!-- 未ログイン時にはログインボタンを表示 -->
      <div v-else key="logout">
        <button type="button" @click="doLogin">ログイン</button>
      </div>
    </header>

    <transition-group name="chat" tag="div" class="list content">
      <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
        <div class="item-image"><img :src="image" width="40" height="40"></div>
        <div class="item-detail">
          <div class="item-name">{{ name }}</div>
          <div class="item-message">
            <nl2br tag="div" :text="message"/>
          </div>
        </div>
      </section>
    </transition-group>

    <!-- 入力フォーム -->
    <form action="" @submit.prevent="doSend" class="form">
      <textarea
        v-model="input"
        :disabled="!user.uid"
        @keydown.enter.exact.prevent="doSend"></textarea>
      <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
import Nl2br from 'vue-nl2br';
export default {
  components: { Nl2br },
  data() {
    return {
      user: {},
      chat: [],
      input: '',
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {};
      const ref_message = firebase.database().ref('message');
      if (user) {
        this.chat = []
        ref_message.limitToLast(10).on('child_added', this.childAdded);
      } else {
        ref_message.limitToLast(10).off('child_added', this.childAdded);
      }
    })
  },
  methods: {
    doLogin() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    doLogout() {
      firebase.auth().signOut();
    },
    scrollBottom() {
      this.$nextTick( () => {
        window.scroll(0, document.body.clientHeight);
      });
    },
    childAdded(snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message,
      });
      this.scrollBottom()
    },
    doSend() {
      if (this.user.uid && this.input.length) {
        firebase.database().ref('message').push ({
          message: this.input,
          name: this.user.displayName,
          image: this.user.photoURL,
        }, () => {
          this.input = '' // フォームを空にする
        })
      }
    },
  },
};
</script>
