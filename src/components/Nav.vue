<script>
import classfiy_route from "@/router/classfiy";

// 获取到classfiy中的路由配置
function getRoute() {
  let route = [];
  classfiy_route.forEach((element) => {
    route.push(element);
  });
  return {
    route,
  };
}

export default {
  name: "head",
  setup() {
    const routeObj = getRoute();
    return {
      ...routeObj,
    };
  },
  render() {
    return (
      <div id="nav">
        {this.route.map((element) => {
          return (
            <div class="route-item">
              <router-link to={element.path}>{element.name}</router-link>
            </div>
          );
        })}
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global";

#nav {
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  border-right: 1px solid $grey200;
  overflow: hidden;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .route-item {
    height: 40px;
    font-size: 17px;
    line-height: 40px;
    padding-left: 4px;
  }
}
</style>