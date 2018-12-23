<template>
  <div class="mt-5">
    <b-form-input
      v-model="text1"
      type="text"
      class="text-center main-input"
      placeholder="Paste your youtube link here"
    ></b-form-input>
    <p>Value: {{ text1 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: ""
    };
  }
};
</script>


<style scoped lang="scss">
.main-input {
  padding: 20px;
  box-shadow: 4px 6px #8888882f;
}
</style>
