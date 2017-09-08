import Beer from '../../data/data';

const state = {
    beer: {
        id: '',
        name: '',
        nameDisplay: '',
        description: '',
        abv: 0,
        icong: '',
        category: ''
    }
};

const mutations = {
    'SET_BEER' (state,Beer) {
        state.beer = Beer;
    }
};

const actions = {
    setTodo: ({commit}, Beer) => {
        commit('SET_TODO', Beer);
    },
    initData: ({commit}) => {
        commit('SET_BEER',Beer);
    }
};

const getters = {
    userTodo: state => {
        return state.beer;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}