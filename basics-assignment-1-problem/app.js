const app = Vue.createApp({
  data() {
    return {
      myName: 'Katie "Baller" Rey',
      myAge: 42,
    }
  },
  methods: {
    favouriteNumber() {
      // const favNum = Math.floor(Math.random() * 10)
      const favNum = Math.random()
      return favNum
    },
  },
})

app.mount('#assignment')
