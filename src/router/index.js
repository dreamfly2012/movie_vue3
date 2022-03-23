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
        path:'/cateogry',
        name:'Category',
        component: ()=> import("../components/Category.vue")
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router