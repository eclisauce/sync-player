<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-content class="test">
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <div>
              <input-bar @inputData="updateVideoId"></input-bar>
              <video-player :videoId="childData"></video-player>
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
      childData: "",
      isSubmitted: true
    };
  },
  methods: {
    updateVideoId(variable) {
      this.childData = variable;
    }
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
