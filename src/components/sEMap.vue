<template>
  <div>


  </div>
</template>

<script>
import servicesMap from "@/services/services.map"

export default {
  name: "EitMap",

  data() {
    return {
      setPos: {
        lat: null,
        lng: null,
      },
      restaurantlist: undefined,
    };
  },


  methods: {

    userLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
          },
          (err) => {
            console.log("err: ", err);
          }
        );
      }
    },

    loadMap(){
      servicesMap.initMap(this.setPos, 'restaurant', 20)
        .then(resp => {
          console.log(resp)
          this.restaurantlist = resp
        })
    },
  },

  created() {
    this.userLocation();
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 100%;
  height: 100%;
}
</style>