const todo = document.querySelector("#to-do-list");
const inputText = todo.querySelector("input");
const addTodo = todo.querySelector("button");
const ul = todo.querySelector("ul");
const todoList = [];
let key = "";
const subKey = "todolist";

//입력
function addTodoList(event) {
    event.preventDefault(); 
    const li = document.createElement("li");
    li.appendChild(createTodoText());
    li.appendChild(createDeleteButton());
    ul.appendChild(li);
}

//삭제
function deleteTodoList(event) {
    const li = event.target.parentElement;
    li.remove();
}

//TodoList 저장소에 저장
function addStorage() {
    localStorage.setItem(key, JSON.stringify(todoList));
}

//TodoList 저장소에서 가져오기
export function getStorage() {
    const savedToDos = localStorage.getItem(key);
    if(savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        parsedToDos.forEach(setItems);
    }
}

function setItems(item) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerHTML = item;
        todoList.push(item); 
        li.appendChild(span);     
        li.appendChild(createDeleteButton());
        ul.appendChild(li);
}

//TodoList 텍스트 생성
function createTodoText () {
    const span = document.createElement("span");
    const text = inputText.value;
    inputText.value = "";
    span.innerHTML = text;
    todoList.push(text);
    addStorage();
    return span;
}

//TodoList 삭제 버튼 생성
function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = '❌';
    deleteButton.addEventListener("click", deleteTodoList);
    return deleteButton;
}

//유저 정보 설정
export function setKey(userId) {
    key = userId + subKey;
}

todo.addEventListener("submit",addTodoList);