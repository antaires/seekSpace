<template>
<div class="wrapper" v-bind:style="bgc">
  <div class="content">
    <h1>{{welcome}}</h1>
    <h2>{{ description }}</h2>
    <input type="text" v-on:input="bgc.backgroundColor = $event.target.value" placeholder="Type here..."/>
  <div>
    <br>
    <br>
    <h1>Meet Our Pilots Below</h1>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      description: 'Type any colour name, rgb, hex or hsl in the input below to customise your homepage!',
      welcome: 'Welcome to seekSpace',
      bgc: {
        backgroundColor: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
