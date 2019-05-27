<template>
  <div>
    <div v-if="$store.state.isUserLoggedIn && $store.state.room">
      <panel title="You have selected a room: ">
      </panel>
    </div>

    <panel title="Select from our many luxurious rooms">
      <span v-if="!$store.state.isUserLoggedIn"> Please sign up or login to view rooms! </span>
      <span v-if="$store.state.isUserLoggedIn"> -- ALL ROOMS BOOKED! PLEASE CHECK BACK SOON -- </span>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
