<template>
  <v-toolbar fixed class="header_color">
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        seekSpace
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        :to="{
          name:'journey'
        }">
        browse
      </v-btn>
    </v-toolbar-items>
        <v-toolbar-items>
      <v-btn
        flat
        :to="{
          name:'game'
        }">
        game
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
        :to="{
          name:'login'
        }">
          login
        </v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          :to="{
            name:'register'
          }">
          sign up
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          flat
          @click="logout">log out
        </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // redirect to homepage
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>

.header_color {
    color: cyan;
}

.home {
    cursor: pointer;
}

.home:hover {
    color: darkblue
}

</style>
