<template>
  <div id="app">
    <h2>vuex</h2>
    <hr/>
    <router-link to='/count'>加减</router-link>
    <span></span>
    <router-link to='/Shopping'>购物车</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store.js';
export default {
    name: "app",
    store,
    components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
span{
  padding-left:20px;
}
</style>
