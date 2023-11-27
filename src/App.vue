<template>
  <div id="app">
    <HatComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import HatComp from './components/HatComp.vue';
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HatComp,
    FooterComp,
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
