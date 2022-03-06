import { getPost } from "../api/post";
import { div, span } from "../core/tag.js";
import List from "../components/boardList.js";


function Main(query) {
    
    (async () => {
        const data = await getPost();
        //setPosts(data);
    })();

    const list = List().template;

    return {
        template: () => {
            div({class: "page center-box"}, [
                div({class: "center-box row-box column-info" },[
                    span({}, ["ID"]),
                    span({}, ["Title"]),
                    span({}, ["Date"]),
                    span({}, ["Writer"]),
                ]),
                list({
                    posts: query.get("page")
                })
            ])
        }
    };
}

export default Main;