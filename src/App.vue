<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { getRoute } from "@/api/global";
import { reactive } from "@vue/reactivity";
import store from "./store";

// 获取动态导航栏
function getRouteAPI() {
  let result = reactive([]);
  getRoute().then(
    (res) => {
      debugger
    },
    (err) => {}
  );
  return result;
}
export default {
  name: "App",
  setup() {
    getRouteAPI();
  },
};
</script>

<style lang="scss">
*,
html,
body {
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
}

#nav {
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#content {
}
</style>
