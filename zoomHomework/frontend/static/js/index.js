import { router, navigateTo } from "./router/router.js"

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        e.preventDefault();
        //undefined 체크 안해주면 text작성할 때 화면 초기화
        if(e.target.href === undefined) return;
        navigateTo(e.target.href);
    });  
    router();
})
