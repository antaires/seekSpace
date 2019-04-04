<template>
  <v-layout column>
    <v-flex>
      <panel title="Register">
        <form
          name="seekSpace-form"
          autocomplete="off">
        <v-text-field
          label="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          class="cyan"
          @click="register">
          Register
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
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
.error {
  color: red;
}
</style>
