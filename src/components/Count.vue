<template>
     <div>
          <h4>count:{{$store.state.count.count}}</h4>
          <button @click='decrement'>-</button>
          <span></span>
          <button @click='increment'>+</button>
          <h5>判断奇偶数：{{evenOrOdd}}</h5>
          <span>变为偶数</span>
          <button @click='incrementIfOdd'>incrementIfOdd</button>
          <span>异步：</span>
          <button @click='incrementAsync'>异步</button>
          <p>历史记录：<span v-for="(item,idx) in historyArr" :key='idx'>{{item}}</span></p>
     </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:mapGetters([
        'evenOrOdd',
        'historyArr'
    ]),
    methods:mapActions([
        'increment',
        'decrement',
        'incrementIfOdd' ,
        'incrementAsync'      
    ])
};
</script>

<style>
</style>


