<template>
  <div id="app">
    <h2>vuex</h2>
    <hr/>
    <router-link to='/count'>加减</router-link>
    <span></span>
    <router-link to='/shopping'>购物车</router-link>
    <span></span>
    <router-link to='/todo'>todo</router-link>
    <span></span>
    <router-link to='/chat'>chat</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "app",
    components: {}
};
</script>

<style scope>
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
