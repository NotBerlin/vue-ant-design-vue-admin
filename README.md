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