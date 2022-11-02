<script setup>
import {RouterLink} from 'vue-router'
import {ref} from 'vue'
const sideLinks = ref([
    {
    label:'Home',
    routeName:'home'
},
    {
    label:'Témoignages',
    routeName:'testimonials'
},
    {
    label:'Rates',
    routeName:'rates'
},
    {
    label:'Teams',
    routeName:'teams'
}
])



</script>

<template>
  
  <nav>
        <ul class='mymenu'>
            <li v-for="(link,idx) in sideLinks" :key="idx">
                <RouterLink :to="{name:link.routeName}"> {{link.label}} </RouterLink>
            </li>
        </ul>

    </nav>
 
</template>
<style scoped >
.router-link-exact-active {
  color: cyan;
  border-right:4px solid lime;
}


</style>