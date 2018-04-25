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
        state.count++;  
        state.historyArr.push('increment');
    }
};

const actions={
    increment:({commit})=>commit('increment'),
    decrement:({commit})=>commit('decrement'),
    incrementIfOdd:({commit})=>commit('incrementIfOdd'),
    incrementAsync:({commit})=>{      
        setTimeout(function(){
            commit('incrementAsync');  
        },1000);
    }
};

const getters={
    evenOrOdd:state=>state.count%2==0?'even':'odd',
    historyArr:state=>state.historyArr.slice(-5)
};

export default {
    state,
    mutations,
    actions,
    getters
};