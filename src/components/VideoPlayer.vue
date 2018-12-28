<template>
  <div>
    <v-flex>
      <youtube
        :video-id="videoId"
        ref="youtube"
        @playing="playing"
        @ready="ready"
        :player-vars="playerVars"
      />
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
          <v-progress-linear color="error" height="20" value="value"></v-progress-linear>
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
      value: "",
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
    ready() {
      console.log("ready");
    },
    playVideo() {
      this.$refs.youtube.player.playVideo();
      let currentTime = Promise.resolve(this.player.getCurrentTime());
      currentTime.then(function(value) {
        setInterval(function() {
          console.log(value);
        }, 200);
      });
    },
    pauseVideo() {
      this.$refs.youtube.player.pauseVideo();
    },

    playing() {
      console.log("o/ we are watching!!!");

      let duration = Promise.resolve(this.$refs.youtube.player.getDuration());
      duration.then(function(value) {
        console.log(value);
      });
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
