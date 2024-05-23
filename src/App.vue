<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* Global styles for your application */
body {
  background: rgb(42, 46, 51);
  color: azure;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 100;
  font-style: normal;
  word-spacing: 5px;
}
</style>
