const app = Vue.createApp({
  data() {
    return {
      myName: 'Katie "Baller" Rey',
      myAge: 42,
      imageUrl: 'https://i.huffpost.com/gen/1436244/thumbs/o-NORTH-SHORE-SURF-900.jpg?6',
    }
  },
  methods: {
    favouriteNumber() {
      // const favNum = Math.floor(Math.random() * 10)
      const favNum = Math.random()
      return favNum
    },
    calculateAge() {
      return this.myAge + 5
    },
  },
})

app.mount('#assignment')
