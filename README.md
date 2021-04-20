# vue3-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### mockjs
本地请求数据来源使用mockjs插件
配置数据在servers服务文件下，mock-server.js文件中

### axios
配置axios请求接口插件裤
封装axios在utils文件夹下http.js文件中
返回的get和post方法，传入url和参数和config
在api文件夹中配置每个模块需要的请求


### components
封装公共组件


### router
配置动态路由
```js
let menus = {
  path: "/user", // 路由路径
  name: "user", // 页面名称，跟页面内的name属性要相同
  meta: {
    title: "用户管理", // 页面标签的标题
    icon: "user", // 菜单图标名称，要在@/icons/svg目录下能找到
    hidden: false, // 是否隐藏该菜单，不配置则默认显示；为true不显示
    noClose: false, // 是否不可关闭，不配置则默认可关闭（显示“x”）；为true则不可关闭，将一直显示，如首页
    noCache: false // 是否缓存页面，不配置则默认缓存（保留对页面的操作及输入的数据）；为true则不缓存
  },
  children: [] // 子菜单，结构跟父菜单一样
};
```


### ant-design-vue
```js
（当前是vue3.0版本，需要antd下一代版本使用命令npm i --save ant-design-vue@next）
1、yarn add ant-design-vue
4、src/main.js
import {Button,Switch} from 'ant-design-vue'
Vue.use(Button).use(Switch)
5、使用
<a-button type="primary">哈哈哈</a-button>
<a-switch defaultChecked />
```


### 全局样式global.scss



### Composition API
例，将form表单和form事件封装到一个函数中，在setup调用此函数返回得到的对象用点展开运算符赋值到return的对象中
```js
<script>
import { reactive, ref } from "@vue/reactivity";

// 表单相关数据和事件
function formAPI() {
  let formRef = ref(); //绑定表单，对提交时触发表单验证规则
  let formState = reactive({
    number: "", // 默认值 与输入框绑定  如果想输入框能用placeholder, 那么就置为null
    password: "",
    type: null, // 如果想默认显示第一项 写成第一项的值就行  写 ' ' 会默认为空
  });
  let rules = {
    name: [
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
    type: [
      {
        required: true,
        message: "请选择类型",
        trigger: "blur",
      },
    ],
  };
  let typeArr = ref([
    {
      id: 1,
      type: "类型1",
    },
    {
      id: 2,
      type: "类型2",
    },
  ]);
  const onSubmit = () => {
    // formRef 就是为了这一步  这样点击提交的时候  会触发表单验证 注：绑定formRef时不是{this.formRef}
    formRef.value
      .validate()
      .then(() => {
        console.log("values", formState);
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
    typeArr,
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
          <a-form
            ref="formRef"
            model={this.formState}
            rules={this.rules}
            label-col={{ span: 4 }}
          >
            <a-form-item ref="number" label="账号" name="number">
              <a-input v-model={[this.formState.number, "value"]} />
            </a-form-item>
            <a-form-item ref="password" label="密码" name="password">
              <a-input v-model={[this.formState.password, "value"]} />
            </a-form-item>
            <a-form-item ref="password" label="密码" name="password">
              <a-input v-model={[this.formState.password, "value"]} />
            </a-form-item>
            <a-form-item label="下拉选择">
              <a-select
                v-model={[this.formState.type, "value"]}
                placeholder="请选择类型"
              >
                {this.typeArr.map((item) => {
                  return (
                    <a-select-option
                      v-model={[item.type, "value"]}
                      key={item.id}
                    >
                      {item.type}
                    </a-select-option>
                  );
                })}
              </a-select>
            </a-form-item>
            <a-form-item label="下拉选择">
              <a-button onClick={this.onSubmit}>提交</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    );
  },
};
</script>
```


### vue3中引入message，notifacation等组件
```js
import { message } from 'ant-design-vue';


const a = <message></message>;
a.type.success('登录成功')
```


### 配置路由守卫
```js
// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = store.state.logined ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/');
  }
})
```



### 添加antv/g2，分析每天上班行程
```js
yarn add @antv/g2
```


### 添加全局事件eventbus
```JS
import emitter from '@/utils/eventBus'
 
// listen to an event
emitter.on('foo', e => console.log('foo', e) )
 
// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )
 
// fire an event
emitter.emit('foo', { a: 'b' })
 
// clearing all events
emitter.all.clear()
 
// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten
```