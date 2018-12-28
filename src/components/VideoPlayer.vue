<template>
  <div>
    <v-flex>
      <youtube :video-id="videoId" @playing="playing" :player-vars="playerVars"/>
    </v-flex>
  </div>
</template>
<script>
export default {
  props: ["videoId"],
  data() {
    return {
      playerVars: {
        autoplay: 1,
        controls: 0
      }
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
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

