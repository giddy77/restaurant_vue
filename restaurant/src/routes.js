import HomePage from './components/HomePage.vue';
import SignUp  from './components/SignUp.vue';

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name:"HomePage",
        path: '/',
        component:HomePage
    },
    {
        name:"SignUp",
        path: '/signup',
        component:SignUp
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
    }
);

export default router;