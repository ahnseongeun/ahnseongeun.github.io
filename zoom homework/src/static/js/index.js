import { router } from "./router/router.js"

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.match("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.herf);
            router();
        }
    });
    router();
})

