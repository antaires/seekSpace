<template>
  <v-layout column>
    <v-flex>
      <panel title = "The Journey Awaits">
        <div v-for="place in journey"
          :key="place.id">
          {{place.name}} :
          {{place.feature}} -
          {{place.activity}}
        </div>
        <h3> explore the mysteries of the cosmos </h3>
        <p>
          see wonders of which our ancestors could only dream
        </p>
      </panel>
    </v-flex>
  </v-layout>
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
  async mounted () {
    // do a request to the backend for all the places
    this.journey = (await JourneyService.index()).data
  }
}
</script>

<style scoped>
</style>
