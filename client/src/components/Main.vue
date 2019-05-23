<template>
<div id="app">
<div class="wrapper" v-bind:style="bgc">
  <div class="content">
    <h1>{{welcome}}</h1>
    <h2>{{ description }}</h2>
    <input type="text" v-on:input="bgc.backgroundColor = $event.target.value" placeholder="Type here..."/>
  <div>
    <br>
    <br>
    <h1>Meet Our Friendly Staff Below</h1>
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card hover color=cyan darken-2>
            <v-card-title primary class="title">Pilot</v-card-title>
            <v-icon x-large dark>flight_takeoff</v-icon>
            <v-card-text>{{ pilot }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color=indigo darken-4>
                <v-card-title primary class="title">Co-Pilot</v-card-title>
                    <v-icon x-large dark>android</v-icon>
                <v-card-text>{{ filler.slice(0, 70) }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex
                  v-for="n in 2"
                  :key="n"
                  d-flex
                  xs12
                >
                  <v-card
                    color=deep-purple lighten-1
                  >
                    <v-card-text>{{ filler.slice(0, 40) }}</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color=brown lighten-2>
            <v-card-text>{{ filler.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color=blue-grey darken-1>
            <v-card-text>{{ filler.slice(0, 100) }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      description: 'Type any colour name, rgb, hex or hsl in the input below to customise your homepage!',
      welcome: 'Welcome to seekSpace',
      bgc: {
        backgroundColor: ''
      },
      pilot: `Pilot Hans Gruber has been with us since 2198! ` +
             `He will make sure our flight is as asteroid free as possible.` +
             `You can find him on the flight deck programming his trusty ` +
             `AI Co-Pilot Rob`,
      filler: `Staff says hello`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
},
.v-card-title {
  color: azure
}
</style>
