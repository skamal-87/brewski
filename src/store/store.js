import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import beers from './modules/beers';
Vue.use(Vuex);

export default new Vuex.Store({
 modules:{users,beers}
})