const title = document.querySelector("div.hello:first-child h1");

console.log(title.innerText);
console.dir(title);

title.innerText = "Hello"; 

function handleTitleClick() {
    console.log("title was clicked!");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleOnclickTest() {
    title.innerText = "click test!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("hello");
}

function handleWindowOffline() {
    alert("offline start!");
}

function handleWindowOnline() {
    alert("online start!");
}


//title.addEventListener("click",handleTitleClick); 
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

//아래 방식처럼 js 속성에 바로 function 삽입이 가능하다.
title.onclick = handleOnclickTest;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

let colorCheck = true;

function changeColor() {
    if(colorCheck) {
        title.style.color = "blue";
    } else {
        title.style.color = "red";
    }
    colorCheck = !colorCheck;
    console.log(colorCheck);
}

title.addEventListener("click", changeColor);

const h2 = document.querySelector("div.hello:first-child h2");

function changeColor2() {
    h2.className = "active";
}

h2.addEventListener("click", changeColor2);

