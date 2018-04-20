import Vue from 'vue';
import Router from 'vue-router';
import Count from '../components/Count.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

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
        }
    ]
});