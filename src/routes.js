import Home from './components/Home.vue';
import Login from './components/Login.vue';
import TodoList from './components/TodoList.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/login',component: Login},
    {path: '/todos',component: TodoList}

]