import { images } from "./image.js";
import { getStorage, setKey } from "./todo.js";
export let userId = "";
const background = document.querySelector("body");
const enableLogin = document.querySelector("#login");
const enableSignUp = document.querySelector("#sign-up");
const loginForm = document.querySelector("#login-form");
const signUpForm = document.querySelector("#signUp-form");
const todoForm = document.querySelector("#to-do-list");
const signUp = signUpForm.querySelector("button");
const login = loginForm.querySelector("button");
//const colors = ['red','blue','yellow','green','violet','pink'];
//이미지 처리
function setBackGroundImage() {
    const randomNumber = Math.floor(Math.random() * images.length);
    const url = images[randomNumber];
    const image = `url('${url}')`; 
    background.style.backgroundImage = image;
}

setBackGroundImage();

function doLogin(event) {
    event.preventDefault();
    const id = loginForm.querySelector("#id").value;
    const password = loginForm.querySelector("#password").value;
    const user = localStorage.getItem(id);
    if(user === null) {
        alert("존재하지 않는 사용자 입니다.");
        return;
    } else if (user !== password) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }
    setUser(id);
}

function doSignUp(event) {
    event.preventDefault();
    const id = signUpForm.querySelector("#id").value;
    const password = signUpForm.querySelector("#password").value;
    checkUserInfo(id);
    saveUserInfo(id, password);
    alert("회원가입 되었습니다.");
    enableSignUp.setAttribute('hidden',true);
    signUpForm.setAttribute('hidden',true);
}

function checkUserInfo(id) {
    const user = localStorage.getItem(id);
    if(user !== null) {
        alert("이미 존재하는 사용자 입니다.");
    } 
}

function saveUserInfo(id, password) {
    localStorage.setItem(id, password);
}

function setUser(id) {
    loginForm.setAttribute('hidden',true);
    signUpForm.setAttribute('hidden',true);
    todoForm.removeAttribute('hidden');
    enableLogin.setAttribute('hidden',true);
    enableSignUp.setAttribute('hidden',true);
    const userInfo = document.createElement('span');
    //userInfo.innerHTML = `${id}님 환영 합니다!}`;
    background.appendChild(userInfo);
    setKey(id);
    getStorage();
    const title = document.querySelector("#header h1");
    title.setAttribute('hidden',true);
}

function loginEnable() {
    loginForm.removeAttribute('hidden');
    signUpForm.setAttribute('hidden',true);
}

function signUpEnable() {
    signUpForm.removeAttribute("hidden");
    loginForm.setAttribute('hidden',true);
}

signUp.addEventListener("click",doSignUp);
login.addEventListener("click",doLogin);
enableLogin.addEventListener("click", loginEnable);
enableSignUp.addEventListener("click", signUpEnable);