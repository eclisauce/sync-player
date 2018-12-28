<template>
  <div>
    <v-flex>
      <youtube :video-id="videoId" ref="youtube" @playing="playing" :player-vars="playerVars"/>
      <v-layout row>
        <v-flex xs2>
          <v-btn @click="playVideo" small fab color="success">
            <i class="fas fa-play"></i>
          </v-btn>
          <v-btn @click="pauseVideo" small fab color="error">
            <i class="fas fa-pause"></i>
          </v-btn>
        </v-flex>
        <v-flex xs10>
          <v-progress-linear color="error" height="20" :value="0"></v-progress-linear>
        </v-flex>
      </v-layout>
    </v-flex>
  </div>
</template>
<script>
export default {
  props: ["videoId"],
  data() {
    return {
      playerVars: {
        controls: 0,
        disablekb: 1,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3
      }
    };
  },
  methods: {
    test() {
      (this.player.getCurrentTime() / this.player.getDuration()) * 100;
    },
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>
<style lang="scss">
iframe {
  width: 100%;
}
</style>

