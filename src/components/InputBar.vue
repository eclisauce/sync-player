<template>
  <div>
    <h1 class="display-3 text-xs-center">Watch videos with your friends</h1>
    <v-subheader>Gather some friends and syncronize your video</v-subheader>
    <v-flex>
      <v-text-field
        label="Paste your Youtube-id here"
        solo
        light
        v-model="videoId"
        @keyup.enter="submit"
      ></v-text-field>
    </v-flex>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoId: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.videoId);
      this.videoId = "";
    }
  }
};
</script>
