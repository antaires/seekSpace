<template>
  <div>
    <panel title="Select from our many luxurious rooms">
      <span v-once> -- ALL ROOMS BOOKED! PLEASE CHECK BACK SOON -- {{ "" }}</span>
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
