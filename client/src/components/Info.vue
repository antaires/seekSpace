<template>
  <div>
    <panel title="seekSpace was created by rt18274 and oc18251">
      <v-container>
        <a href="#"><img v-bind:src="img" alt="" class="logo"></a>
      </v-container>
      <span v-once> -- From 2019 onwards: to outerspace and beyond -- {{ "" }}</span>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
const imageLink = require('../assets/seekSpaceLogo15.png')
export default {
  name: 'onepage',
  data () {
    return {
      img: imageLink
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
