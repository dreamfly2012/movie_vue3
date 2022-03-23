import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:"/",
        redirect:'/home'
    },
    {
        path:'/home',
        name:'Home',
        component: ()=> import("../components/Home.vue")
    },
    {
        path: '/hot',
        name: 'Hot',
        component: () => import("../components/Hot.vue")
    },
    {
        path: '/my',
        name: 'My',
        component: () => import("../components/My.vue")
    },
    {
        path:'/category',
        name:'Category',
        component: ()=> import("../components/Category.vue")
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router