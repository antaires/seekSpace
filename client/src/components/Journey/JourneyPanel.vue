<template>
  <panel title = "The Journey Awaits">
  <div v-if="!$store.state.isUserLoggedIn">
    <span>
      Login or Sign Up to see our exciting activities!
    </span>
  </div>

  <div v-if="$store.state.isUserLoggedIn">
  <v-btn
      slot="action"
      class="cyan accent-2"
      light
      absolute
      right
      middle
      fab
      :to="{
        name:'journey-add'
      }">
      <v-icon>add</v-icon>
  </v-btn>
  <div v-for="place in journey"
      class="place"
      :key="place.id">

      <v-layout>
      <v-flex xs6>
          <div class="place-name">
          {{place.name}}
          </div>
          <div class="place-feature">
          {{place.feature}}
          </div>
          <div class="place-activity">
          {{place.activity}}
          </div>

          <v-btn
          dark
          class="cyan"
          :to="{
            name: 'place',
            params: {
              placeId: place.id
            }
          }">
          view
          </v-btn>

      </v-flex>

      <v-flex xs6>
          <img class="place-imageURL" :src="place.imageURL"/>
      </v-flex>

      </v-layout>

  </div>
  </div>
  <h3> explore the mysteries of the cosmos </h3>
  <p>
      see wonders of which our ancestors could only dream
  </p>
  </panel>
</template>

<script>
import JourneyService from '@/services/JourneyService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      // array loaded from database
      journey: null
    }
  },
  methods: {
  },
  // watch for change in search query string
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.journey = (await JourneyService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.place {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.place-name {
  font-size: 30px;
}

.place-feature {
  font-size: 24px;
}

.place-activity {
  font-size: 18px;
}

.place-imageURL {
  width: 100%;
  margin: 0 auto
}
</style>
