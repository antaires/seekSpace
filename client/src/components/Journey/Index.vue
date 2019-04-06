<template>
  <v-layout column>
    <v-flex>
      <journey-search-panel />
      <journey-panel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import JourneyPanel from './JourneyPanel'
import JourneySearchPanel from './JourneySearchPanel'
import JourneyService from '@/services/JourneyService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    JourneyPanel,
    JourneySearchPanel
  },
  data () {
    return {
      // array loaded from database
      journey: null
    }
  },
  methods: {
  },
  async mounted () {
    // do a request to the backend for all the places
    this.journey = (await JourneyService.index()).data
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
