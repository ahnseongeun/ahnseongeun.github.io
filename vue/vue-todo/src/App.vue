<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import Vue from 'vue';

var my_cmp = {
  template: '<div>my component </div>'
};

new Vue({
  el: '#app',
  components: {
    'my-cmp': my_cmp
  }
});

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'todo-header' : TodoHeader,
    'todo-input' : TodoInput,
    'todo-list' : TodoList,
    'todo-footer' : TodoFooter,
    
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: gray;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>