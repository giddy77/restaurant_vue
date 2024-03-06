import HomePage from './components/HomePage.vue';
import SignUp  from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddRest from './components/AddRest.vue';
import UpdateRest from './components/UpdateRest.vue'

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
    {
        name:"Login",
        path: '/login',
        component:LoginPage
    },
    {
        name:"Add",
        path: '/add',
        component:AddRest
    },
    {
        name:"Update",
        path: '/update',
        component:UpdateRest
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
    }
);

export default router;