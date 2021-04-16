<template>
  <Page>
    <div id="about">{{ msg }}</div>
  </Page>
</template>
<script>
import Page from "../components/Page";

export default {
  name: "About",
  components: { Page },
  setup() {
    const msg = "about";

    return { msg };
  },
};
</script>

<style lang="scss" scoped>
#about {
    
}
</style>