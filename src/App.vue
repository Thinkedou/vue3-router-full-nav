<script setup>
import {RouterView} from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheNav from './components/TheNav.vue';


</script>

<template>
  <TheHeader />

  <RouterView />

  <TheNav />



  <aside>Sidebar</aside>
  <footer>Made with 💜 by Réré</footer>

</template>

<style scoped>

</style>
