import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';
import BeerList from './components/BeerList.vue';
import store from './store/store.js';

export const routes = [
    {path: '/', component: Home},
    {path: '/login',component: Login},
    {path: '/beers',component: BeerList},
    {path: '/logout',component: Logout}

]