import { Core } from "./core/core.js";
import { div } from "./core/tag";
// import { div } from "./core/tag.js";
import Main from "./pages/main.js";
import { Component } from "./types/component";

const RouterMap = {
    path: Component
}

function Router() {
    const getPath = () => {
        const path = document.location.pathname;
        const pathVariable = path.split("/");
        const queryParams = new URLSearchParams(document.location.search);
        return {
            path: `/${pathVariable[1]}`,
            params: pathVariable.slice(2, pathVariable.length),
            query: queryParams
        };
    };

    const map = {
        "/": Main
    };

    const initPage = getPath();
    const { currentPage, setCurrentPage }
        = Core.useRouter(map[initPage.path]);

    const onChangeLocation = () => {
        Core.clear();
        const nextPage = getPath();
        setCurrentPage(
            map[nextPage.path]({ params: nextPage.params, query: nextPage.query})
        );
    };

    window.addEventListener("route", onChangeLocation);

    return {
        template: () => div({ class: "router" }, [curPage().template()]),
    };
}


export default Router;