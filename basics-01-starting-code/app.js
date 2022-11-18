const app = Vue.createApp({
  data() {
    // value stored in the data property is an object
    return {
      courseGoal: 'Finish Course',
    }
  },
})

app.mount('#user-goal')
