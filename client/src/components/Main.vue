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
    <h1>Your Dashboard</h1>
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card hover color="cyan darken-2">
            <v-card-title primary class="title">Pilot</v-card-title>
                      <v-img contain
            src="https://ukamsat.files.wordpress.com/2013/06/valentina-tereshkova-image-credit-rsc-energia.jpg"
            aspect-ratio="1"
          ></v-img>
          <br>
            <v-icon x-large dark top-right>flight_takeoff</v-icon>
            <v-card-text>{{ pilot }}</v-card-text>
                <v-layout row justify-center>
                  <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="success" dark v-on="on">Ask Her A Question</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Write Your Question Below!</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                              <v-text-field
                                label="Your Question Here*"
                                required
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-autocomplete
                                :items="['Space Phone', 'Intercom', 'Ship Mail']"
                                label="Response Requested Via"
                                multiple
                              ></v-autocomplete>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="dialog = false">Submit</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card hover color="indigo darken-4">
                <v-card-title primary class="title">Co-Pilot</v-card-title>
                                      <v-img contain
            src="https://i.kinja-img.com/gawker-media/image/upload/s--TM2kbifF--/18s0g3grlnxr5jpg.jpg"
            aspect-ratio="1"
          ></v-img>
                <v-card-text>{{ copilot }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex>
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="400"
    >
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-twitter
        </v-icon>
        <span class="title font-weight-light">Twitter</span>
      </v-card-title>
      <v-card-text class="headline font-weight-bold">
        "NASA has retrieved the engraved names from the 2020 Mars Rover, come see if your great great grandparents were on it!."
      </v-card-text>
      <v-card-actions>
        <v-list-tile class="grow">
          <v-list-tile-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Laika</v-list-tile-title>
          </v-list-tile-content>
          <v-layout
            align-center
            justify-end
          >
            <v-icon class="mr-1">add</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">share</v-icon>
            <span class="subheading">45</span>
          </v-layout>
        </v-list-tile>
      </v-card-actions>
    </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card hover color="teal lighten-2">
            <v-card-text>{{ filler.slice(0, 90) }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card hover color="blue-grey darken-1">
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
      dialog: false,
      description: 'Type any colour name, rgb, hex or hsl in the input below to customise your homepage!',
      welcome: 'Welcome to seekSpace',
      bgc: {
        backgroundColor: ''
      },
      pilot: `Pilot Valentina Tereshkova has been with us since 2198! ` +
             `She will make sure our flight is as asteroid free as possible.` +
             `You can find her on the flight deck programming the trusty ` +
             `AI Co-Pilot Rob`,
      filler: `Staff says hello`,
      copilot: `Hi I'm Bot Rob, programmed by NASA scientists and functioning` +
      ` since 2056! Next maintenance scheduled for T-15 minutes`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  color: black;
  font-weight: normal;
},
text {
  color: black;
},
v-card-title {
  color: rgb(239, 245, 245)
},
v-img {
max-height: 100;
max-width: 100;
}
</style>
