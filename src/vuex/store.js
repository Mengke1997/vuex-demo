import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 1,
    historyArr:[]
};

const mutations={
    increment(state){
        state.count++;
        state.historyArr.push('increment');
    },
    decrement(state){
        state.count--;
        state.historyArr.push('decrement');
    },
    incrementIfOdd(state){
        if((state.count+1)%2==0){
            state.count++;
            state.historyArr.push('increment');
        }
    },
    incrementAsync(state){
        setTimeout(function(){
            state.count++;  
            state.historyArr.push('increment');  
        },1000);
    }
};

const actions={
    increment:({commit})=>commit('increment'),
    decrement:({commit})=>commit('decrement'),
    incrementIfOdd:({commit})=>commit('incrementIfOdd'),
    incrementAsync:({commit})=>commit('incrementAsync')
};

const getters={
    evenOrOdd:state=>state.count%2==0?'even':'odd',
    historyArr:state=>state.historyArr.slice(-5)
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
