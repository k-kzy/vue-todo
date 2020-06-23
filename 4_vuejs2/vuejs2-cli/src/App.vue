<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber
      :total-number="number"
      @my-click="incrementNumber"
    />
    <button @click="currentComponent = 'Home'">
      Home
    </button>
    <button @click="currentComponent = 'About'">
      About
    </button>
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>


    <div style="padding: 10rem;">
      <h2>イベントフォーム</h2>
      <EventTitle v-model="eventData.title" />



      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        v-model.number="eventData.maxNumber"
        type="number"
      >
      <p>{{ typeof eventData.maxNumber }}</p>


      <label for="host">主催者</label>
      <input
        id="host"
        v-model.trim="eventData.host"
        type="text"
      >
      <pre>{{ eventData.host }}</pre>


      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        v-model.trim="eventData.detail"
        cols="30"
        row="10"
      />
      <p style="white-space: pre;">
        {{ eventData.detail }}
      </p>


      <input
        id="isPrivate"
        v-model="eventData.isPrivate"
        type="checkbox"
      >
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>


      <p>参加条件</p>
      <input
        id="10"
        v-model="eventData.target"
        type="checkbox"
        value="10代"
      >
      <label for="10">10代</label>

      <input
        id="20"
        v-model="eventData.target"
        type="checkbox"
        value="20代"
      >
      <label for="20">20代</label>

      <input
        id="30"
        v-model="eventData.target"
        type="checkbox"
        value="30代"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>


      <p>参加費</p>
      <input
        id="free"
        v-model="eventData.price"
        type="radio"
        value="無料"
      >
      <label for="free">無料</label>
      <input
        id="paid"
        v-model="eventData.price"
        type="radio"
        value="有料"
      >
      <label for="paid">有料</label>

      <p>{{ eventData.price }}</p>


      <p>開催場所</p>
      <select
        v-model="eventData.location"
      >
        <option
          v-for="location in locations"
          :key="location"
        >
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>


    <transition>
      <div v-if="show">
        消えたり現れたりするのも
      </div>
    </transition>
    <transition>
      <div v-if="show">
        こっちか
      </div>
      <div v-else>
        こっちになる
      </div>
    </transition>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue"

export default {
components: {
  LikeHeader,
  About,
  Home,
  EventTitle
},
data() {
  return {
    show: true,
    number: 14,
    currentComponent: "Home",
    locations: [
      "東京", "大阪", "名古屋"
    ],
    eventData: {
      title: "",
      maxNumber: 0,
      host: "",
      detail: "",
      isPrivate: false,
      target: [],
      price: "無料",
      location: []
    }
  };
},
methods: {
  incrementNumber(value) {
    this.number = value;
  }
}
};
</script>
