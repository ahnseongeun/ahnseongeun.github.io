export default class {
    constructor() {
        document.title = "WriteBoard";
    }
    async getHtml() {
        return createHeader();
    }

    async createForm() {
        const root = document.querySelector('#root');
        root.innerHTML = createHeader();
        
        const div = document.createElement("div");
        div.innerHTML = addForm();
        const submit = div.querySelector("#submit")
        submit.addEventListener("submit",() => console.log("submit"));
        root.appendChild(div);
        //div.appendChild(addForm());
    }
}

function createHeader() {
    const html = `<h1> This is Write Board</h1>`;
    return html;
}

function addForm() {
    return `
        <form action="board-save" method="post">
                <table  style="padding-top:50px" align = center width=700 border=0 cellpadding=2 >
                <tr>
                    <td height=20 align= center bgcolor=#ccc><font color=white> 글쓰기</font></td>
                </tr>
                <tr>
                    <td bgcolor=white>
                    <table class = "table2">
                            <tr>
                            <td>작성자</td>
                            <td><input type ="text" name = name size=20 value = ""> </td>
                            </tr>

                            <tr>
                            <td>제목</td>
                            <td><input type = text name = title size=60 placeholder="입력하세요."></td>
                            </tr>

                            <tr>
                            <td>내용</td>
                            <td><textarea name = content cols=85 rows=15></textarea></td>
                            </tr>

                            </table>

                            <center>
                                <button type="submit" id="submit">작성</button>
                            </center>
                            </td>
                </tr>
        </table>
    </form>`
}
