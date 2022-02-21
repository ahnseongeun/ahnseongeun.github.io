import customAjax from '../ajax.js'
import AbstractView from "./AbstractView.js";
import { navigateTo } from '../router/router.js';
import writeBoard from './WriteBoard.js';

export default class BoardList extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("BoardList");
    }

    async getHtml() {
        return createHeader();
    }

    async getBoardList() {
        
        const data = JSON.parse(await customAjax('GET',`http://localhost:3000/board`));
        // data크기만큼 게시물 출력함
        const root = document.querySelector('#root');

        root.innerHTML = createHeader();

        for (const comment of data.boardList) {
            // 원하는 게시물 출력
            const ul = document.createElement("ul");
            root.appendChild(ul);
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            li1.innerHTML = comment.title;
            ul.appendChild(li1);
            li2.innerHTML = comment.author;
            ul.appendChild(li2);
        }

        const writeButton = document.createElement('a');
        writeButton.href = "/write";
        writeButton.innerHTML = "글쓰기";
        writeButton.addEventListener('click',createWriteBoard);
        root.appendChild(writeButton);
    }
}

function createWriteBoard(e) {
    e.preventDefault();
    navigateTo(e.target.href);
}

function createHeader() {
    const html = `<h1>This is BoardList Page</h1>`
    return html;
}

function createFooter() {
    const html = `<h1>This is BoardList Page</h1>`
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
