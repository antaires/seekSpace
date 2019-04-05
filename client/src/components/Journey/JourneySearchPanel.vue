<template>
  <panel title="search">
    <v-text-field
      label="search by location, activity or feature"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      search: ''
    }
  },
  // Want to keep track of text user enters in search as they're typing
  watch: {
    search (value) {
      // as search value changes, push a new route
      const route = {
        name: 'journey'
      }
      // ignore empty searches
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    // Want the search field to match the string stored above, incase a user refreshes the page
    // Accomplish this with another watcher
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
