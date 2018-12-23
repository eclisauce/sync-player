<template>
  <div id="app">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <div>
        <Heading/>
        <b-row align-v="center">
          <b-col>
            <InputBar/>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import InputBar from "./components/InputBar.vue";
import Heading from "./components/Heading.vue";

export default {
  name: "app",
  components: {
    InputBar,
    Heading
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
body {
  font-family: "Ubuntu", sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("./assets/bg-1.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
}
</style>
