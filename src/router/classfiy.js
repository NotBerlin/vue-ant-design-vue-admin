const classfiy_route = [
    {
        path: "/home",
        name: "Home",
        component: () => import(/*webpackChunkName */ '@/views/home/Home.vue'),
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/*webpackChunkName */ '@/views/home/About.vue'),
    },
    {
        path: "/everyday",
        name: "Everyday",
        component: () => import(/*webpackChunkName */ '@/views/study/Everyday.vue'),
    },
    {
        path: "/g2",
        name: "G2",
        component: () => import(/*webpackChunkName */ '@/views/g2/g2.vue'),
    },
    {
        path: "/automationComponents",
        name: "AutomationComponents",
        component: () => import(/*webpackChunkName */ '@/views/automationComponents/index.vue'),
    },
    {
        path: "/animation",
        name: "Animation",
        component: () => import(/*webpackChunkName */ '@/views/animation'),
    },
]

export default classfiy_route;