<template>
  <panel title = "The Journey Awaits">
  <v-btn
      slot="action"
      @click="navigateTo({name: 'journey-add'})"
      class="cyan accent-2"
      light
      absolute
      right
      middle
      fab>
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
          @click="navigateTo({
              name: 'place',
              params: {
              placeId: place.id
              }
          })">
          view
          </v-btn>

      </v-flex>

      <v-flex xs6>
          <img class="place-imageURL" :src="place.imageURL"/>
      </v-flex>

      </v-layout>

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
    navigateTo (route) {
      this.$router.push(route)
    }
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
