<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid class="background">find yourself amongst the stars
           <img src="./assets/hubble_nebula1.jpg">
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.toolbar_title {
  color: white;
}

.btn_content {
  color: white;
}

.danger-alert{
  color: red;
}

</style>
