import { Post } from "../types/post.js";
import { Router } from "../core/router.js";


let Props = {
    posts: Post
}

function BoardList() {
    const handleClickPost = (e) => {
        console.log("update");
    };

    return {
        template: (Props) => {
            EventManager.addEventHandler("post", "click", handleClickPost);
            return ul({ class: "container center-box"}, [
                ...posts.map((Post) => {
                    const { id, title, date, writer} = postElement;
                    return li({class: "post", "data-id": id},[
                        span( {class: "post-id"},     [id]),
                        span( {class: "post-title"},  [title]),
                        span( {class: "post-date"},   [date]),
                        span( {class: "post-writer"}, [writer]),
                    ]);
                }),
            ]);
        },
    };
}

export default BoardList;