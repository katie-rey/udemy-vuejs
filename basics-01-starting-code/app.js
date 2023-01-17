const app = Vue.createApp({
  data() {
    // we pass an object to createApp
    // value stored in the data property is an object
    // data key requires a function and always returns an object with key value pairs
    return {
      courseGoal: 'Kill it!',
      courseGoalA: 'Finish Course',
      courseGoalB: 'Master Vue',
      // can be a string/bolean/array etc
      vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    // allows you to define functions that execute e.g. user event
    outputGoal() {
      // must be a function, above is shorthand for a function
      const randomNumber = Math.floor(Math.random() * 10)
      if (randomNumber < 5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    },
  },
})

app.mount('#user-goal')

// data is a function/method
// methods takes an object that will be full of methods

// methods have access to all key/value pairs in the global data object (it sits behind the scenes)
// we can use "this" js syntax to access the global data object (vueApp object)

////////////////////////////////////////////////////////////////

//outputting data:

// interpolation and the v-bind directive.

// Also combined with the knowledge that you can output either

// data or the result of method calls.
