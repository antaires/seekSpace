/* eslint-disable */
<template>
  <div>
    <Game />
  </div>
</template>

<script>
</script>

<script>
/* eslint-disable no-unused-vars */
import Game from './gameJS'
/* eslint-enable no-unused-vars */

export default {
  name: 'game',
  components: {
    'Game': Game
  },
  data () {
    return {
      msg: 'The Unsettling Adventures of the Creature from Farout'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
