import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
    routes: [
        {
            path: '',
            alias: '/',
            name: 'home',
            redirect: '/dashboard',
            component: () => import('./Layout'),

            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('./components/Dashboard')
                },
                {
                    path: '/exemplo1',
                    name: 'exemplo1',
                    component: () => import('./components/Exemplo1')
                },
                {
                    path: '/exemplo2',
                    name: 'exemplo2',
                    component: () => import('./components/Exemplo2')
                },
            ],
        }
    ]
});