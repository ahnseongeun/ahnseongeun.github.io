const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

console.log(loginInput.innerHTML + " " + loginButton.innerHTML);

const link = document.querySelector("a");

function onLoginBtnClick() {
    const username = loginInput.value;
    if( username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("your name is too long.");
    }
}

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    const username = loginInput.value;
    console.log(username);
}

function handleLinekdClick(){
    alert("click");
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinekdClick);
