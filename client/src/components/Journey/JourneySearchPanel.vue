<template>
  <panel title="search">
    <v-text-field
      label="search by location, activity or feature"
      v-model="search"
    ></v-text-field>
      <v-btn color="cyan">Show Activities By Solar System</v-btn>
      <v-btn color="cyan">Show Safe Planets For Humans</v-btn>
      <v-btn color="cyan">Order By Activity</v-btn>

  </panel>
</template>

<script>
import _ from 'lodash'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      search: ''
    }
  },
  // Want to keep track of text user enters in search as they're typing
  watch: {
    // use lodash to prevent searching database on every keystroke user enters
    search: _.debounce(async function (value) {
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
      // delay of 700 milliseconds before searching
    }, 700),
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
