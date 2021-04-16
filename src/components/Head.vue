<script>
import router from "../router/index.ts";
import store from "@/store";

// 退出登录
function out() {
  const signOut = function () {
    store.state.logined = false;
    setTimeout(() => {
      router.replace("/");
    }, 300);
  };
  return {
    signOut,
  };
}

export default {
  name: "head",
  setup() {
    const signOut = out();

    // 查询事件
    function search() {}

    return {
      ...signOut,
    };
  },
  render() {
    return (
      <div class="head">
        <div class="left">
          <slot name="icon"></slot>
        </div>
        <div class="right">
          <slot name="sign-out">
            <a-button onClick={this.signOut} class="item">
              退出
            </a-button>
          </slot>
          <slot name="person"></slot>
          <slot name="action"></slot>
          <slot name="search">
            <a-input-search
              placeholder="input search text"
              style="width: 200px"
              search={this.search}
            />
          </slot>
        </div>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global";

.head {
  height: 50px;
  width: 100%;
  position: sticky;
  display: flex;
  border-bottom: 1px solid $grey200;

  .left {
    height: 100%;
    width: 50px;
  }

  .right {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding-right: 12px;

    .ant-btn {
      padding: 4px;
      border-radius: 5px;
    }

    .item {
      margin-left: 10px;
    }
  }
}
</style>