<template>
  <v-layout>
    <v-flex>
    <panel title="Journey Metadata">
      <v-text-field
      label="name"
      v-model="place.name"
      ></v-text-field>
      <v-text-field
      label="feature"
      v-model="place.feature"
      ></v-text-field>
      <v-text-field
      label="activity"
      v-model="place.activity"
      ></v-text-field>
      <v-text-field
      label="imageURL"
      v-model="place.imageURL"
      ></v-text-field>
      <v-text-field
      label="youtubeID"
      v-model="place.youtubeID"
      ></v-text-field>
    </panel>

    <v-btn
      dark
      class="cyan"
      @click="create">
      enter
    </v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import JourneyService from '@/services/JourneyService'

export default {
  data () {
    return {
      place: {
        name: null,
        feature: null,
        activity: null,
        imageURL: null,
        youtubeID: null
      }
    }
  },
  methods: {
    async create () {
      try {
        // call API
        await JourneyService.post(this.place)
        // return to journey page after submit
        this.$router.push({
          name: 'journey'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
