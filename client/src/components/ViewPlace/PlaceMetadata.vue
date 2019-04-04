<template>
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
</template>

<script>
export default {
  props: [
    'place'
  ]
}
</script>

<style scoped>
</style>