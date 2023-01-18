const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      const addNum = this.counter++
      // return addNum
    },
    addFive(num) {
      this.counter = this.counter + num
      // return addNumFive
    },
    minus() {
      const minusNum = this.counter--
      // return minusNum
    },
  },
})

app.mount('#events')

// use methods to connect to events like above
