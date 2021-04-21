<script>
import { getRoute } from "@/api/global";
import { reactive } from "@vue/reactivity";
import Head from "@/components/Head";
import Nav from "@/components/Nav";

// 获取动态导航栏
function getRouteAPI() {
  let result = reactive([]);
  getRoute().then(
    (res) => {},
    (err) => {}
  );
  return result;
}
export default {
  name: "App",
  setup() {
    getRouteAPI();

    return {};
  },
  render() {
    return (
      <div id="cover">
        <Head></Head>
        <div class="content">
          <Nav></Nav>
          <transition name="slide-left">
            <router-view class="child-view" />
          </transition>
        </div>
      </div>
    );
  },
};
</script>


<style lang="scss" scoped>
#cover {
  height: 100%;
  width: 100%;

  .content {
    height: calc(100% - 51px);
    width: 100%;
    display: flex;
  }

  .transition {
    height: 100%;
    width: 100%;
  }

  .child-view {
    width: 100%;
    height: 100%;
  }
  .slide-left-enter {
    -webkit-transform: translate(30px, 0);
    -moz-transform: translate(30px, 0);
    -o-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-right-leave-active {
    transition: transform .5s;
    -webkit-transform: translate(30px, 0);
    -moz-transform: translate(30px, 0);
    -o-transform: translate(30px, 0);
  }
}
</style>