<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- v-on: 하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트 메소드 이름"-->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- v-bind: 내려보낼 Props 속성 이름 = "현재 위치의 컴포넌트 데이터 속성 "-->
    <todo-list v-bind:propsdata="todoItems" 
      v-on:removeItem="removeOneItem(todoItem, index)"
      v-on:toggleItem="toggleOneItem"
    ></todo-list>
    <todo-footer
      v-on:clearAll="clearAllItems"
    ></todo-footer>
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
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    //여기서 로직 처리하는 것이 App Component 방식
    addOneItem: function(todoItem) {
      var obj = {completed: false, item: todoItem}; 
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1); // javascript 배열에서 인덱스를 이용해서 지우고 새로운 배열 반환, slice는 기존 배열 변경 X
    },
    toggleOneItem : function(todoItem, index) { 
      // App에 있는 todoItems를 변경하는 것이 좋다.
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      this.todoItems = [];
      localStorage.clear();
    },
  },
  created: function() {
        console.log('created');
        if (localStorage.length > 0 ) {
            for ( var i = 0; i < localStorage.length; i++ ) {
                // 집어 넣을 때 Stringify로 넣고 꺼내올 때는 JSON.parse로 변환해서 객체로 받아야 한다.
                let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                this.todoItems.push(value);
            }
        }
    },
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