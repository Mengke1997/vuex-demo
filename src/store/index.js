import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count.js';
import shopping from './modules/ShoppingCart.js';
import todo from './modules/todo.js';
import chat from './modules/chat.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules:{ 
        count,
        shopping,
        todo,
        chat
    },
    strict:debug
});
