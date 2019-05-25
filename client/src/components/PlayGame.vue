/* eslint-disable */
<template>
  <div id="app">
    <panel title="play the Creature from Far Out!">
      <v-app>
          <v-container fill-height>
            <v-layout row wrap align-center>
              <v-flex class="text-xs-center">
                <a href="http://localhost:3000/game.html"><v-btn>PLAY!</v-btn></a>
              </v-flex>
              <v-flex>
                <img src="../assets/gameSplash.png" alt="">
              </v-flex>
            </v-layout>
          </v-container>
      </v-app>
    </panel>
  </div>
</template>

<script>

import Panel from '@/components/Panel'
const imageLink = require('../assets/seekSpaceSmall.png')

export default {
  methods: {
    data () {
      return {
        img: imageLink
      }
    },
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
  },
  components: {
    Panel
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
