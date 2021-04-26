<template>
  <div id="animation">
    <button v-on:click="click">Toggle</button>
  </div>
</template>

<script>
export default {
  name: "animation",
  emits: ["close"],
  methods: {
    click() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
#animation {
  height: 100px;
  width: 100px;
}
</style>