import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import VModal from 'vue-js-modal'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VModal);


const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})