import Vue from 'vue';
import Router from 'vue-router';
import Count from '../components/Count.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import Todo from '../components/Todo.vue';
import Chat from '../components/Chat.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/count',
            component: Count
        },
        {
            path:'/shopping',
            component:ShoppingCart
        },{
            path:'/todo',
            component:Todo
        },
        {
            path:'/chat',
            component:Chat
        }
    ]
});