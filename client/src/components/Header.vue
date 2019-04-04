<template>
    <v-toolbar fixed class="header_color">
    <v-toolbar-title class="mr-4">
        <span
            class="home"
            @click="navigateTo({name: 'root'})">
            seekSpace
            </span>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn
            flat
            @click="navigateTo({name:'journey'})">
            browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            @click="navigateTo({name:'login'})">
            login
        </v-btn>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            @click="navigateTo({name:'register'})">sign up
            <!--<router-link to="register">sign up</router-link>-->
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
    navigateTo (route) {
      this.$router.push(route)
    },
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
