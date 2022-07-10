import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import About from './components/About.vue';
import Login from './components/login/Login.vue';
import Signup from './components/login/Signup.vue';
import Analyses from './components/analyses/Analyses.vue';


// Create the router app
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            name: 'About',
            component: About 
        },
        { 
            path: '/Login', 
            name: 'Login',
            component: Login 
        },
        { 
            path: '/Signup', 
            name: 'Signup',
            component: Signup 
        },
        { 
            path: '/Analyses', 
            name: 'Analyses',
            component: Analyses 
        },
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app')

