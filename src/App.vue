<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-content class="test">
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <div>
              <input-bar></input-bar>
              <video-player></video-player>
            </div>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import InputBar from "./components/InputBar.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
export default {
  name: "App",
  components: {
    InputBar,
    VideoPlayer
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss">
.test {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("./assets/bg1.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
