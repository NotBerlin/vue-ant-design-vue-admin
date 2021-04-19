const classfiy_route = [
    {
        path: "/home",
        name: "home",
        component: () => import(/*webpackChunkName */ '@/views/home/Home.vue'),
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/*webpackChunkName */ '@/views/home/About.vue'),
    },
    {
        path: "/everyday",
        name: "Everyday",
        component: () => import(/*webpackChunkName */ '@/views/study/Everyday.vue'),
    }
]

export default classfiy_route;