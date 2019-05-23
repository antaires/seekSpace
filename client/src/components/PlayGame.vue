/* eslint-disable */
<template>
  <div>
    <v-toolbar-items>
    <a href="http://localhost:3000/game.html"><button>play!</button></a>
    </v-toolbar-items>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// import Game from './Game'
/* eslint-enable no-unused-vars */

// export default {
//  name: 'game',
//  components: {
//    'Game': Game
//  },
//  data () {
//    return {
//      msg: 'The Unsettling Adventures of the Creature from Farout'
//    }
//  }
// }
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect to game
      this.$router.push(
        '3000/game.html'
      )
    },
    redirect () {
      window.location.href = '3000/game.html'
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
