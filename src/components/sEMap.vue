<template>
  <div class="App" />
</template>

<script>
//import gmapsInit from '../utils/gmaps'
//import axios from 'axios'
import { mapMutations } from "vuex";

export default {
  name: "EitMap",

  data() {
    return {
      setPos: {
        lat: null,
        lng: null,
      },
    };
  },

  methods: {
    ...mapMutations("Pos", ["SETCURRENTPOS"]),

    userLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.SETCURRENTPOS(this.setPos);
          },
          (err) => {
            console.log("err: ", err);
          }
        );
      }
    },

    initMap() {},
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