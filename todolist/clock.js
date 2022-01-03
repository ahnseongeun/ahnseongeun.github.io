const clock = document.querySelector("#clock");

function changeClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = String(date.getDate()).padStart(2,'0');
    const hour = String(date.getHours()).padStart(2,'0');
    const minute = String(date.getMinutes()).padStart(2,'0');
    const second = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
}

setInterval(changeClock, 1000);