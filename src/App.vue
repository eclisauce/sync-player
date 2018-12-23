<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-content class="test">
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex>
              <h1 class="display-3" justify-center>Watch videos with your friends</h1>
              <input-bar></input-bar>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>


<script>
import InputBar from "./components/InputBar.vue";
export default {
  name: "App",
  components: {
    InputBar
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
