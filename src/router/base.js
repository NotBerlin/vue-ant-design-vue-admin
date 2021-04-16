const base_route = [
    {
        path: "/",
        name: "home",
        meta: {
          title: '首页',
          icon: "home",
          hidden: false, // 是否隐藏该菜单，不配置则默认显示；为true不显示
          noClose: false, // 是否不可关闭，不配置则默认可关闭（显示“x”）；为true则不可关闭，将一直显示，如首页
          noCache: false // 是否缓存页面，不配置则默认缓存（保留对页面的操作及输入的数据）；为true则不缓存
        },
        component: ()=> import(/*webpackChunkName */ '@/views/Home.vue'),
      },
      {
        path: "/about",
        name: "about",
        component: ()=> import(/*webpackChunkName */ '@/views/About.vue'),
      }
]

export default base_route;