const state = {
    credentials: {
        username: '',
        password: ''
    }
};

const mutations = {
    'SET_USER' (state,credentials) {
        state.credentials = credentials
    }
};

const actions = {
    initUser: ({commit}, credentials) => {
        commit('SET_USER', credentials);
    }
};

const getters = {
    userCred: state => {
        return state.credentials;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}