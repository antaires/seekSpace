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
      <v-btn v-if="$store.state.isAdmin && $store.state.isUserLoggedIn"
        slot="action"
        :to="{
          name:'journey-edit'
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
        v-if="isUserLoggedIn && !bookmark"
        slot="action"
        class="cyan accent-2"
        @click="setAsBookmark"
        light
        absolute
        large
        fab>
        <v-icon>save</v-icon>
      </v-btn>

      <v-btn
        v-if="isUserLoggedIn && bookmark"
        slot="action"
        class="cyan accent-2"
        @click="unsetAsBookmark"
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
      'isUserLoggedIn',
      'isAdmin'
    ])
  },
  data () {
    return {
      place: {},
      bookmark: null
    }
  },
  watch: {
    async place () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        // Only needed if user logged in
        this.bookmark = (await BookmarksService.index({
          // placeId: placeId
          placeId: this.place.id,
          // dynamically set user id
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err + 'issue with ViewPlace')
      }
    }
  },
  async mounted () {
    // Grap the placeId when user clicks on a view button
    const placeId = this.$store.state.route.params.placeId
    this.place = (await JourneyService.show(placeId)).data
  },
  // props: [
  // 'youtubeID'
  // ],
  components: {
    // Youtube,
    Panel
  },
  methods: {
    async setAsBookmark () {
      // Save bookmark data
      try {
        this.bookmark = (await BookmarksService.post({
          placeId: this.place.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err + 'Could not save bookmark data')
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err + 'Could not delete bookmark data')
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
