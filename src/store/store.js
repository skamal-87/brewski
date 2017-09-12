import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import users from './modules/users';
import beers from './modules/beers';
import config from '../config.js';

Vue.use(Vuex);

const state = {
    beerData: [],
    dataPopulated: false
  };
  
  const mutations = {
    'FETCH_BEER' (state, beerDataCall) {
      state.beerData = beerDataCall;
    }
  };
  
  const actions = {
    initBeer: ({ commit }) => {
      axios.get(config.URL + `/api/beerz/`, 
      {
        headers: {'Content-Type': 'application/json'}
      }).then(response => {
        console.log(response);
        commit("FETCH_BEER", response.data);
        state.dataPopulated = true;
      }).catch(error => {
        console.log(error);
      });
    }
  };
  
  const getters = {
    beerData: state => {
      return state.beerData;
    }
  };

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{users,beers}
})