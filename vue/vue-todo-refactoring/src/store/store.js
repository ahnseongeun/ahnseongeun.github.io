import Vue from 'vue'
import Vuex from 'vuex'

// Vue의 use는 전역으로 특정 기능을 추가하고 싶을 때 사용한다.
Vue.use(Vuex);

// Todo.vue
export const store = new Vuex.Store({
  state: {
    headerText: 'Todo it!'
  }  
});