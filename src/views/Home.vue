<template>
  <Page>
    <div id="home">{{ msg }}</div>
    <button @click="abc">abc</button>
  </Page>
</template>
<script>
import Page from "../components/Page";

export default {
  name: "Home",
  components: { Page },
  setup() {
    const msg = "123";
    const abc = function () {
      console.log(test());
      // test().then(
      //   (res) => {
      //     debugger;
      //   },
      //   (err) => {
      //     debugger;
      //   }
      // );
    };

    return { msg, abc };
  },
};
</script>

<style lang="scss" scoped>
#home {
}
</style>