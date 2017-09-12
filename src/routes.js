import Home from './components/Home.vue';
import Login from './components/Login.vue';
import BeerList from './components/BeerList.vue';
import store from './store/store.js';

export const routes = [
    {path: '/', component: Home},
    {path: '/login',component: Login},
    {path: '/beers',component: BeerList}

]