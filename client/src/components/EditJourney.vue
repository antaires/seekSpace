<template>
  <v-layout>
    <v-flex>
    <panel title="Journey Metadata">
      <v-text-field
      label="name"
      required
      :rules="[required]"
      v-model="place.name"
      ></v-text-field>
      <v-text-field
      label="feature"
      required
      :rules="[required]"
      v-model="place.feature"
      ></v-text-field>
      <v-text-field
      label="activity"
      required
      :rules="[required]"
      v-model="place.activity"
      ></v-text-field>
      <v-text-field
      label="imageURL"
      required
      :rules="[required]"
      v-model="place.imageURL"
      ></v-text-field>
      <v-text-field
      label="youtubeID"
      required
      :rules="[required]"
      v-model="place.youtubeID"
      ></v-text-field>
    </panel>

    <div class="danger-alert" v-if="error">
      {{error}}
    </div>

    <v-btn
      dark
      class="cyan"
      @click="save">
      save
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
      },
      error: null,
      // Prevent empty fields being entered
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      // Check everything is filled in before submitting
      this.error = null
      const areAllFieildsFilledIn = Object
        .keys(this.place)
        .every(key => !!this.place[key])
      if (!areAllFieildsFilledIn) {
        this.error = 'Please fill in all required fields'
        return
      }

      const placeId = this.$store.state.route.params.placeId
      try {
        await JourneyService.put(this.place)
        // Direct user back to place that was edited
        this.$router.push({
          name: 'place',
          params: {
            placeId: placeId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const placeId = this.$store.state.route.params.placeId
      this.place = (await JourneyService.show(placeId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
