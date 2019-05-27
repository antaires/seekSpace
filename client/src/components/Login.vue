<template>
  <v-layout column>
    <v-flex>
      <panel title="Login">
        <v-text-field
          label="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="password"
          type="password"
          v-model="password"
        ></v-text-field>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            class="cyan"
            @click="login">
            login
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      admin: false,
      room: 0,
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
          admin: this.admin,
          room: this.room
        })
        // use response to call action
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setAdmin', response.data.user.admin)
        this.$store.dispatch('setAdmin', response.data.user.room)
        console.log('setting room in login: ' + response.data.user.room)
        this.$router.push({
          name: 'journey'
        })
      } catch (error) {
        //  what is returned from axios, error is message we defined
        this.error = error.response.data.error
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
