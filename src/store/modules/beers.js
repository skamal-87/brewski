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
    },
    'INIT_USER_BEER'(state,ub){
        state.userBeer = ub
    }
};

const actions = {
    initData: ({commit}, Beer) => {
        commit('INIT_BEER',Beer);
    },
    setBeers: ({commit}, errthang) => {
        commit('SET_BEER', errthang);
    },
    initUserBeer: ({commit}, ub) => {
        commit('INIT_USER_BEER', ub);
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