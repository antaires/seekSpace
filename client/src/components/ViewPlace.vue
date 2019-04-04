<template>
  <panel title = "Discover the secrets of the galaxy">
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

      </v-flex>

      <v-flex xs6>
        <img class="place-imageURL" :src="place.imageURL"/>
      </v-flex>

    </v-layout>

    <v-layout>
      <div class="place-video">
        {{place.youtubeID}}
      </div>
    </v-layout>
  </panel>

</template>

<script>
import JourneyService from '@/services/JourneyService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      place: {}
    }
  },
  async mounted () {
    // Grap the placeId when user clicks on a view button
    const placeId = this.$store.state.route.params.placeId
    this.place = (await JourneyService.show(placeId)).data
  },
  components: {
    Panel
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
