import { router, navigateTo } from "./router/router.js"

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(e.target.href);
    });  
    router();
})
