<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welcome To seekSpace!</h2>
  <div  id="landing-page">
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to seekSpace!'
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b900;
}
#landing-page {
  background-image: url("../assets/hubble_nebula1.jpg");
  /*background-color: #8f2c2c;*/
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
