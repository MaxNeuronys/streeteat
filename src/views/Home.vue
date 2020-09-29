<template>
    <div v-if="this.loadMap === false" id="mapLoader" class="flex flex-center">
        <div @click="goTopMap">
            <button>Find Me</button>
        </div>
    </div>
    <div v-else-if="this.loadMap === true">
        <Map></Map>
    </div>    
</template>

<script>
import Map from '../components/sEMap.vue'

export default {
  name: 'Home',
  data() {
      return {
       loadMap : false,
      }
    },
      components:{
      Map
  },

  methods: {
    goTopMap(){
      this.loadMap = true
    }
  }
}

</script>
<style scoped>
#mapLoader{
  background-image: url("https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/pass/GoogleMapTA.jpg");
  opacity: 0.85;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100% ;
}
</style>