<template>
  <div class="counter">
    <h1>FizzBuzz</h1>
    <h2 id="count">{{ FizzBuzz }}</h2>
    <button id="button" v-on:click="count+=1">+1</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data() {
    return {
      count : 0
    }
  },
  computed: {
      FizzBuzz: function () {
          if (this.count == 0) return 0
          if (this.count % 15 == 0) {
              return "FizzBuzz"
          }
          else if (this.count % 3 == 0) {
              return "Fizz"
          }
          else if (this.count % 5 == 0) {
              return "Buzz"
          } else {
              return this.count
          }
      }
  }
}
</script>