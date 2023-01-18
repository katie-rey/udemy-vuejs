const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      nameLast: '',
      confirmedNameLast: '',
    }
  },
  methods: {
    submitForm(event) {
      // event.preventDefault()
      alert('Submitted!')
    },

    setName(event) {
      this.name = event.target.value
    },
    setNameWithLast(event, lastName) {
      this.nameLast = event.target.value + ' ' + lastName
    },
    confirmInput() {
      this.confirmedNameLast = this.nameLast
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
