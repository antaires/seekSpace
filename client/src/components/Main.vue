<template>
  <div id="app">
    <panel title="Your base on the journey - make it your own!">
    <div class="wrapper" v-bind:style="bgc">
      <div class="content">
        <h1>{{welcome}}</h1>
        <h2>{{ description }}</h2>
        <input
          type="text"
          v-on:input="bgc.backgroundColor = $event.target.value"
          placeholder="        Type here..."
        >
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
                    <v-img
                      contain
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
                                  <v-text-field label="Your Question Here*" required></v-text-field>
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
                        <v-img
                          contain
                          src="https://i.kinja-img.com/gawker-media/image/upload/s--TM2kbifF--/18s0g3grlnxr5jpg.jpg"
                          aspect-ratio="1"
                        ></v-img>
                        <v-card-text>{{ copilot }}</v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex d-flex>
                      <v-layout row wrap>
                        <v-flex>
                          <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                            <v-card-title>
                              <v-icon large left>mdi-twitter</v-icon>
                              <span class="title font-weight-light">Twitter</span>
                            </v-card-title>
                            <v-card-text
                              class="title font-weight-light"
                            >"NASA has retrieved the engraved names from the 2020 Mars Rover, come see if your great great grandparents were on it!."</v-card-text>
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
                                <v-layout align-center justify-end>
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
                    <v-card-title primary class="title">Spaceship Facts</v-card-title>
                    <v-card-text>{{ facts }}</v-card-text>
                    <div class="text-xs-center">
                      <v-dialog v-model="dialog2" width="500">
                        <template v-slot:activator="{ on }">
                          <v-btn color="success" dark v-on="on">Fact!</v-btn>
                        </template>
                        <v-card>
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >Spaceship Fact!</v-card-title>
                          <v-card-text class="fact_text">This spaceship was first designed in 2019 (over 190 years ago!) by NASA scientists but the technology was lacking to make such an advanced piece of tech.</v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click="dialog2 = false">
                              <v-icon dark>close</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <br>
                      <br>
                      <br>
                      <br>
                      <v-dialog v-model="dialog3" width="500">
                        <template v-slot:activator="{ on }">
                          <v-btn color="success" dark v-on="on">Fact!</v-btn>
                        </template>
                        <v-card>
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >Astronaut Food Fact!</v-card-title>
                          <v-card-text class="fact_text">Early astronauts were confined to eating freeze dried foods but today we have technology to provide filet mignon OUTSIDE the spacecraft!</v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click="dialog3 = false">
                              <v-icon dark>close</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <br>
                      <br>
                      <br>
                      <br>
                                            <v-dialog v-model="dialog4" width="500">
                        <template v-slot:activator="{ on }">
                          <v-btn color="success" dark v-on="on">Fact!</v-btn>
                        </template>
                        <v-card>
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >Materials Fact!</v-card-title>
                          <v-card-text class="fact_text">Did you know that that the materials used to make the spacesuits when you go for spacewalks are 16 times thinner than the very first astronaut suits?</v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click="dialog4 = false">
                              <v-icon dark>close</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                      <br>
                      <br>
                      <br>
                      <br>
                                            <v-dialog v-model="dialog5" width="500">
                        <template v-slot:activator="{ on }">
                          <v-btn color="success" dark v-on="on">Fact!</v-btn>
                        </template>
                        <v-card>
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >Alien Fact!</v-card-title>
                          <v-card-text class="fact_text">Scientists on board in the lower decks have currently captured 23 unique alien species which are all being carefully studied to find out how their properties allow them to survive in such obscure conditions!</v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click="dialog5 = false">
                              <v-icon dark>close</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                                            <br>
                      <br>
                      <br>
                      <br>
                                            <v-dialog v-model="dialog6" width="500">
                        <template v-slot:activator="{ on }">
                          <v-btn color="success" dark v-on="on">Fact!</v-btn>
                        </template>
                        <v-card>
                          <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                          >Distance Fact!</v-card-title>
                          <v-card-text class="fact_text">Every minute we get 6,000 miles further from the point we were at previously, but because of SpeedOfSound technology, you don't feel a thing!</v-card-text>
                          <v-divider></v-divider>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" flat @click="dialog6 = false">
                              <v-icon dark>close</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md3>
                  <v-card hover color="blue-grey darken-1">
                    <v-card-title primary class="title">Available Rooms</v-card-title>
                    <v-card-text>Level: Junior Suite</v-card-text>
                    <v-icon x-large dark top-right>home</v-icon>
                    <v-img
                      contain
                      src="https://cdnb.artstation.com/p/assets/images/images/009/007/615/large/andrea-marcet-spaceship-living-room.jpg?1516616560"
                      aspect-ratio="1.5"
                    ></v-img>
                    <v-card-text>View Type: Partial Planet</v-card-text>
                    <v-icon x-large dark top-right>visibility</v-icon>
                    <v-img
                      contain
                      src="http://www.nasa.gov/sites/default/files/images/626033main_iss030e078095_full.jpg"
                      aspect-ratio="1.5"
                    ></v-img>
                    <br>
                    <v-card-text>Rate This Room:</v-card-text>
                    <v-rating color="yellow" v-model="rating"></v-rating>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-app>
        </div>
      </div>
    </div>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  name: 'hello',
  data () {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      rating: 3,
      description:
        'Type any colour name, rgb, hex or hsl in the input below to customise your homepage!',
      welcome: 'Welcome to seekSpace',
      bgc: {
        backgroundColor: ''
      },
      pilot:
        `Pilot Valentina Tereshkova has been with us since 2198! ` +
        `She will make sure our flight is as asteroid free as possible.` +
        `You can find her on the flight deck programming the trusty ` +
        `AI Co-Pilot Rob`,
      filler: `Staff says hello`,
      copilot:
        `Hi I'm Bot Rob, programmed by NASA scientists and functioning` +
        ` since 2056! Next maintenance scheduled for T-15 minutes`,
      facts:
        `Below you will find some fun facts for entertainment on board ` +
        `which our scientists have prepared for you. See how many of ` +
        `them you didn't know and then quiz your friends and family!`
    }
  },
  components: {
    Panel
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

.headline {
  color: black;
},

.fact_text {
  color: black;
},

v-card-title {
  color: rgb(239, 245, 245);
},

v-img {
  max-height: 100;
  max-width: 100;
}
</style>
