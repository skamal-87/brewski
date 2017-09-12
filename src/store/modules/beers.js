import Beer from '../../data/data';

const state = {
    beer: {
        id: '',
        name: '',
        nameDisplay: '',
        description: '',
        abv: 0,
        category: ''
    },
    userBeer: []
};

const mutations = {
    'INIT_BEER' (state,Beer) {
        state.beer = Beer;
    },
    'SET_BEER' (state, errthang){
        state.userBeer = errthang;
    }
};

const actions = {
    initData: ({commit}, Beer) => {
        commit('INIT_BEER',Beer);
    },
    setBeers: ({commit}, errthang) => {
        commit('SET_BEER', errthang);
    }

};

const getters = {
    userBeer: state => {
        return state.userBeer;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}