<template>
  <div id="page"><slot></slot></div>
</template>

<script>
export default {
  name: 'page'
}
</script>

<style lang="scss" scoped>
#page {
  width: 100%;
  height: 100%;
  padding: 12px;
}
</style>