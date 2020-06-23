import './assets/app.css';
import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAcgM4L4v4M3E7UlG3Ww-dF48uUYuRpGow",
  authDomain: "chat-app-c6964.firebaseapp.com",
  databaseURL: "https://chat-app-c6964.firebaseio.com",
  projectId: "chat-app-c6964",
  storageBucket: "chat-app-c6964.appspot.com",
  messagingSenderId: "1076262644064"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
});
