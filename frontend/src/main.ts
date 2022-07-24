import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faPhone, faChartLine);



import App from './App.vue';

import About from './components/About.vue';
import Login from './components/login/Login.vue';
import Signup from './components/login/Signup.vue';
import Analyses from './components/analyses/Analyses.vue';
import Upload from './components/Upload.vue';
import Stats from './components/admin/Stats.vue';


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
        { 
            path: '/Upload', 
            name: 'Upload',
            component: Upload 
        },
        { 
            path: '/Stats',
            name: 'Stats',
            component: Stats 
        },
    ]
});

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router);


app.mount('#app')

