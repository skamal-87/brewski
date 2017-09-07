import toDos from '../../data/data';

const state = {
    toDos: {
        username: '',
        todo: '',
        description: '',
        isDone: false,
        hasAttachment: false
    }
};

const mutations = {
    'SET_TODO' (state,toDos) {
        state.toDos = toDos;
    }
};

const actions = {
    setTodo: ({commit}, toDos) => {
        commit('SET_TODO', toDos);
    },
    initData: ({commit}) => {
        commit('SET_TODO',toDos);
    }
};

const getters = {
    userTodo: state => {
        return state.toDos;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}