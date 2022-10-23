<template>
    <div>
        <transition-group name="list" tag="ul">
            <!-- v-for와 v-bind를 하나의 세트라고 생각하자. -->
            <!-- v-for에서는 index를 지원한다. -->
            <li v-for="( todoItem, index ) in propsdata" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" 
                v-on:click="toggleComplete( todoItem, index )"></i>
                <!-- v-bind는 HTML 태그에 속성을 동적으로 부여 가능하게 한다.-->
                <span v-bind:class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods : {
        removeTodo(todoItem, index) {
            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete(todoItem, index) {
            this.$emit('toggleItem', todoItem, index);
        }
    }
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

.list-enter-active,
.list-leave-active  {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>