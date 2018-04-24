<template>
  <div>
    <h1>todos</h1>
    <div class="input-box">
      <span class="point" @click="toggleAllComplete"  :class='{active:pointChange}'></span>
      <input placeholder="请输入内容"  @keyup.enter="addTodo($event)"/>
    </div>
    <div class="item" v-for='(item,idx) in allTodos' :key=idx  @click="toggleTodo(item.id)">
        <span  class="point" :class="[item.completed?'active':'']"></span>
        <span :class="[item.completed?'complete':'']">{{item.content}}</span>
        <span :class="['btn', 'delete']" @click.stop="onDelete(item.id)">X</span>
    </div>
    <div class="total">
      <span>{{num}}个item</span>
       <span @click="toggleFilter('all')">all</span>
      <span @click="toggleFilter('active')">Active</span>   
      <span @click='toggleFilter("completed")'>Completed</span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters([
      'num',
      'pointChange',
      'allTodos'
  ]),
  methods: mapActions([
      'toggleAllComplete',
      'toggleTodo',
      'onDelete',
      'addTodo',
      'toggleFilter'
  ])
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
span {
  padding: 0;
}
h1 {
  font-size: 60px;
  color: rgba(175, 47, 47, 0.15);
}
.input-box {
  margin-bottom: 20px;
  width: 400px;
  height: 30px;
  margin: auto;
  border-bottom: 1px solid #333;
}
.input-box input {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  border: 0;
  outline: 0;
  background: transparent;
}
.point {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #333;
  float: left;
  margin: 5px 0 0 0;
  cursor: pointer;
}
.active {
  background: red;
}
.total {
  width: 400px;
  height: 40px;
  padding: 10px 0;
  text-align: left;
  margin: 0 auto;
}
.total span {
  padding: 1px;
  margin-right: 50px;
  cursor: pointer;
}
.item:first-child {
  margin-top: 20px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 400px;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
}
.item span:last-child{
    cursor: pointer;
}
.btn {
  cursor: pointer;
}
.delete {
  color: red;
}
.complete {
  text-decoration: line-through;
}
.active {
  background: red;
}
</style>

