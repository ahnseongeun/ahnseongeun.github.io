import Home from "../views/Home.js"
import BoardList from "../views/BoardList.js"
import WriteBoard from "../views/WriteBoard.js"
import BoardDetail from "../views/BoardDetail.js"
import UpdateBoard from "../views/UpdateBoard.js"


export const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

export async function router(count) {
    console.log(count);
    const routes = [
        { path: "/", view: Home},
        { path: "/board", view: BoardList},
        { path: "/write", view: WriteBoard},
        { path: "/board/:id", view: BoardDetail},
        { path: "/update/:id", view: UpdateBoard},
    ];

    const pageMatches = routes
        .map((route) => {
            return {
                route,
                isMatch: route.path === location.pathname,
            };
        });

    let match = pageMatches.find((pageMatches) => pageMatches.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

     const view = new match.route.view();
     const root = document.querySelector("#root");
     root.innerHTML = await view.getHtml();

     if( match.route.path === '/board') {
        await view.getBoardList();
     }

     //view.attachEvent();
};