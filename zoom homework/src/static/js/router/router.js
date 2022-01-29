import Home from "../pages/Home.js"
import BoardList from "../pages/BoardList.js"
import Settings from "../pages/BoardDetail.js"

export const router = async () => {

    const routes = [
        { path: "/", view: Home},
        { path: "/boardList", view: BoardList},
        { path: "/settings", view: Settings},
    ];

    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatches) => pageMatches.isMatch);
    const page = new match.route.view();
    const root = document.querySelector("#root");
    root.innerHTML = await page.getHtml();
};