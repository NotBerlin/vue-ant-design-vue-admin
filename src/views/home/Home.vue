<template>
  <Page>
    <div id="home">{{ msg }}</div>
    <a-button type="primary" @click="abc">
      Primary
    </a-button>
    <a-input placeholder="123" />
  </Page>
</template>
<script>
import Page from "@/components/Page";

export default {
  name: "Home",
  components: { Page },
  setup() {
    const msg = "123";
    const abc = function () {
      console.log(test());
    };

    return { msg, abc };
  },
};
</script>

<style lang="scss" scoped>
#home {
}
</style>