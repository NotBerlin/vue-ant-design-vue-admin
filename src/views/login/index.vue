<script>
import { reactive, ref } from "@vue/reactivity";
import { login } from "@/api/login";
import router from "@/router/index.ts";
import store from "@/store"
import { message } from 'ant-design-vue';

// message提示组件
const message_component = <message></message>;

// 表单相关数据和事件
function formAPI() {
  let formRef = ref(); //绑定表单，对提交时触发表单验证规则
  let formState = reactive({
    number: "", // 默认值 与输入框绑定  如果想输入框能用placeholder, 那么就置为null
    password: "",
  });
  let rules = {
    number: [
      {
        required: true,
        message: "请输入账号",
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
    ],
  };
  const onSubmit = () => {
    // formRef 就是为了这一步  这样点击提交的时候  会触发表单验证 注：绑定formRef时不是{this.formRef}
    formRef.value
      .validate()
      .then(() => {
        const params = formState;
        login(params).then(
          (res) => {
            message_component.type.success('登录成功')
            store.state.logined = true;
            setTimeout(()=>{
              router.push("/cover");
            }, 500)
          },
          (err) => {
            alert("登录错误");
          }
        );
        // 表单验证通过就会执行这里  你就可以操作了
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return {
    formRef,
    formState,
    rules,
    onSubmit,
  };
}

export default {
  name: "login",
  setup() {
    const formData = formAPI();

    

    return {
      ...formData,
    };
  },

  render() {
    return (
      <div id="login">
        <div class="password-frame">
          <div class="head">
            <span>登录</span>
          </div>
          <a-form
            ref="formRef"
            model={this.formState}
            rules={this.rules}
            label-col={{ span: 4 }}
          >
            <a-form-item ref="number" label="账号" name="number">
              <a-input v-model={[this.formState.number, "value"]}>
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-item>
            <a-form-item ref="password" label="密码" name="password">
              <a-input v-model={[this.formState.password, "value"]}>
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-item>
            <div class="submit">
              <a-button type="primary" onClick={this.onSubmit}>
                提交
              </a-button>
            </div>
          </a-form>
        </div>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/global.scss";

#login {
  height: 100%;
  width: 100%;
  position: relative;
  background-image: $background-image;

  // 登录框
  .password-frame {
    position: absolute;
    top: 18.5vh;
    right: 12vw;
    width: 370px;
    height: 440px;
    background: $grey100;
    opacity: 0.7;
    border-radius: 3px;
    box-shadow: 2px 2px 3px $grey400;

    //
    .head {
      text-align: center;
      padding: 4px 12px;
      margin-bottom: 12px;
      margin-top: 32px;
      font-family: PingFang SC;
      font-size: 17px;
      font-weight: 400;
    }

    .submit {
      margin: 34px 0;
      text-align: center;
    }
  }
}
</style>