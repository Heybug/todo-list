import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PCBase from '@/components/pc_base'
import PCIndex from '@/page/pc/home/index'
import PCProject from '@/page/pc/project/index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'PCBase',
            component: PCBase,
            children: [
                {
                    path: '', redirect: 'index'
                },
                {
                    path: 'index',
                    component: PCIndex,
                },
                {
                    path: 'project',
                    component: PCProject,
                }
            ]
        }
    ]
})
