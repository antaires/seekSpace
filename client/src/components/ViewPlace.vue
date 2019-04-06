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

      <!--<only visible for admin -->
      <v-btn
        slot="action"
        :to="{
          name:'journey-edit'
          // , params () {
          //  return {
          //    placeId: place.id
          //  }
          // }
        }"
        class="cyan accent-2"
        light
        absolute
        right
        middle
        fab>
        <v-icon>edit</v-icon>
      </v-btn>

      <v-btn
        v-if="isUserLoggedIn && !isBookmarked"
        slot="action"
        class="cyan accent-2"
        @click="bookmark"
        light
        absolute
        large
        fab>
        <v-icon>save</v-icon>
      </v-btn>

      <v-btn
        v-if="isUserLoggedIn && isBookmarked"
        slot="action"
        class="cyan accent-2"
        @click="unbookmark"
        light
        absolute
        left
        fab>
        <v-icon>remove</v-icon>
      </v-btn>

    </v-layout>

    <!--<div>
      <div class="place-video">
        <panel title="Sneak Peak">->
          <youtube
            :video-id="youtubeID"
            :player-width="640"
            :player-height="390">
          </youtube>
        </panel>
        <Youtube :youtubeID="place.youtubeID" /
      </div>
    </div>-->
  </panel>

</template>

<script>
import JourneyService from '@/services/JourneyService'
import Panel from '@/components/Panel'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
// import Youtube from '@/components/Youtube'
// import Youtube from 'vue-youtube-embed'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      place: {},
      isBookmarked: false
    }
  },
  async mounted () {
    // Grap the placeId when user clicks on a view button
    const placeId = this.$store.state.route.params.placeId
    this.place = (await JourneyService.show(placeId)).data
    const bookmark = (await BookmarksService.index({
      placeId: 1,
      userId: 1
    })).data
    // caste bookmark to true or false if it is defined
    this.isBookmarked = !!bookmark
  },
  // props: [
  // 'youtubeID'
  // ],
  components: {
    // Youtube,
    Panel
  },
  methods: {
    bookmark () {
      console.log('bookmark')
    },
    unbookmark () {

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
