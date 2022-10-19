<template>
    <div>
        <ul>
            <!-- v-for와 v-bind를 하나의 세트라고 생각하자. -->
            <!-- v-for에서는 index를 지원한다. -->
            <li v-for="( todoItem, index ) in todoItems" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" 
                v-on:click="toggleComplete( todoItem, index )"></i>
                <!-- v-bind는 HTML 태그에 속성을 동적으로 부여 가능하게 한다.-->
                <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItems, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: [] 
        }
    },
    methods : {
        removeTodo : function(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1); // javascript 배열에서 인덱스를 이용해서 지우고 새로운 배열 반환, slice는 기존 배열 변경 X
        },
        toggleComplete : function(todoItem, index) { 
            localStorage.removeItem(todoItem.item);
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
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
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color: #0262c2;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

</style>