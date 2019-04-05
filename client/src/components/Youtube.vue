<template>
  <panel title="Sneak Peak">
    <youtube
      :video-id="youtubeID"
      :player-width="640"
      :player-height="390">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
// import Youtube from 'vue-youtube-embed'
export default {
  props: [
    'youtubeID'
  ],
  components: {
    // Youtube,
    Panel
  }
}
</script>

<style scoped>
</style>
