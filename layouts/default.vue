<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSide :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheSide from '@/components/Navigation/TheSide.vue'
export default {
  components:{
    TheHeader,
    TheSide
  },
  data() {
    return {
      displaySidenav: false
    }
  },
  
}
</script>

<style>
html{
    font-family: 'Comfortaa', cursive;

    font-family: 'Titillium Web', sans-serif;
}

body{
  margin: 0;
}
</style>