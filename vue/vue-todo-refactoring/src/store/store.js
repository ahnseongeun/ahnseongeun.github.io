import Vue from 'vue'
import Vuex from 'vuex'

// Vue의 use는 전역으로 특정 기능을 추가하고 싶을 때 사용한다.
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
      if (localStorage.length > 0 ) {
          for ( let i = 0; i < localStorage.length; i++ ) {
              if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                arr.push(value);
              }
          }
      }
    return arr;
  },
};

// Todo.vue
export const store = new Vuex.Store({
  state: {
    title: "Todo It!",
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem}; 
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);  
    },
    removeOneItem(state, payload) {
      let todoItem = payload.todoItem;
      let index    = payload.index;
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1); // javascript 배열에서 인덱스를 이용해서 지우고 새로운 배열 반환, slice는 기존 배열 변경 X
    },
    toggleOneItem(state, payload) { 
      // App에 있는 todoItems를 변경하는 것이 좋다.
      let todoItem = payload.todoItem;
      let index    = payload.index;
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
      state.todoItems = [];
      localStorage.clear();
    },
  }
});