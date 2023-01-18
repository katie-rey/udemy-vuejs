const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nameLast: '',
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    },
    setNameWithLast(event, lastName) {
      this.nameLast = event.target.value + ' ' + lastName
    },
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
