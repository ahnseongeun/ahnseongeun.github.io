import customAjax from '../ajax.js'
import AbstractView from "./AbstractView.js";
import { navigateTo } from '../router/router.js';

export default class BoardList extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("BoardList");
    }

    async getBoardList() {
        return createHtml();
    }
}

async function createHtml() {
    const data = JSON.parse(await customAjax('GET',`http://localhost:3000/board`));
    // data크기만큼 게시물 출력함
    const root = document.querySelector('#root');
    const ul = document.createElement("ul");
    root.appendChild(ul);
    for (const comment of data.boardList) {
        // 원하는 게시물 출력
        const li = document.createElement('li');
        li.innerHTML = comment.title;
        ul.appendChild(li);
    }
    const html = `<h1>This is BoardList Page</h1>`;
    return html;
}

/**
 * fs모듈 관련된 이슈
 * https://velog.io/@syoung125/%EB%B2%84%EA%B7%B8-%EA%B0%84%ED%97%90%EC%A0%81-TypeError-fs.readFileSync-is-not-a-function-%EC%98%A4%EB%A5%98
 * @returns 
async function getBoardListData() {
    const {default: data } = await import(`../data/boardListData.json`);
    return data;
}
*/
