<template>
  <div class="mt-5">
    <b-form-input
      v-model="text1"
      type="text"
      class="text-center"
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
</style>
