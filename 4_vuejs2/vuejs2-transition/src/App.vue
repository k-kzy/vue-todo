<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">
      Slide
    </button>
    <button @click="myAnimation = 'fade'">
      Fade
    </button>
    <p>{{ myAnimation }}</p>

    <button @click="add">
      追加
    </button>

    <br>
    <ul style="width: 200px; margin: auto;">
      <transition-group
        name="fade"
        tag="div"
      >
        <li
          v-for="(number, index) in numbers"
          :key="number"
          style="cursor: pointer;"
          @click="remove(index)"
        >
          {{ number }}
        </li>
      </transition-group>
    </ul>
    <br>




    <button @click="show = !show">
      切り替え
    </button>
    <br><br>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="show"
        class="circle"
      />
    </transition>
    <br>


    <button @click="myComponent = 'ComponentA'">
      ComponentA
    </button>
    <button @click="myComponent = 'ComponentB'">
      ComponentB
    </button>
    <transition
      name="fade"
      mode="out-in"
    >
      <component :is="myComponent" />
    </transition>

    <transition
      name="fade"
      mode="out-in"
    >
      <p
        v-if="show"
        key="bye"
      >
        さよなら
      </p>
      <p
        v-else
        key="hello"
      >
        こんにちは
      </p>
    </transition>


    <transition
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__animated animate__shake"
      appear
    >
      <p v-if="show">
        hello
      </p>
    </transition>
    <transition
      :name="myAnimation"
      appear
    >
      <div v-if="show">
        <p>bye</p>
      </div>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue"
import ComponentB from "./components/ComponentB.vue"
export default {
  components: {
    ComponentA,
    ComponentB,
  },
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA",
      numbers: [0, 1, 2],
      nextNumber: 3
    }
  },
  methods: {
    remove(index) {
      this.numbers.splice(index, 1)
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber)
      this.nextNumber += 1
    },
    beforeEnter(el) {
      // 現れる前に実行
      el.style.transform = 'scale(0)'
    },
    enter(el, done) {
      // 現れるとき
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1
        if( scale > 1 ) {
          clearInterval(interval)
          done()
        }
      }, 200)
    },
    leave(el, done) {
      // 消えた時
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1
        if( scale < 0 ) {
          clearInterval(interval)
          done()
        }
      }, 200)
    },
    leaveancelled() {
      // 消えるアニメーションがキャンセルされたとき
    }
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-move {
  transition: transform 1s;
}
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジションの状態 */
  transition: opacity 1s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}

.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジションの状態 */
  transition: opacity 1s;
  position: absolute;
  width: 200px;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s
}

@keyframes slide-in {
 from {
   transform: translateX(100px)
 }
 to {
   transform: translateX(0)
 }
}

.main {
  margin: auto;
  width: 70%;
  padding-top: 5rem;
  text-align: center;
}
</style>
