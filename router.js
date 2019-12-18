import Vue from 'vue'
import Router from 'vue-router'
import AppStart from '@/page/AppStart'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: AppStart
        },
    ]
})