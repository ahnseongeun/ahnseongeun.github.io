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
        root.appendChild(div);
        div.innerHTML = addForm();
        //div.appendChild(addForm());
    }
}

function createHeader() {
    const html = `<h1> This is Write Board</h1>`;
    return html;
}

function addForm() {
    return `
        <form action="writerAction" method="post">
                <table  style="padding-top:50px" align = center width=700 border=0 cellpadding=2 >
                <tr>
                <td height=20 align= center bgcolor=#ccc><font color=white> 글쓰기</font></td>
                </tr>
                <tr>
                <td bgcolor=white>
                <table class = "table2">
                        <tr>
                        <td>작성자</td>
                        <td><input type = text name = name size=20> </td>
                        </tr>

                        <tr>
                        <td>제목</td>
                        <td><input type = text name = title size=60></td>
                        </tr>

                        <tr>
                        <td>내용</td>
                        <td><textarea name = content cols=85 rows=15></textarea></td>
                        </tr>

                        <tr>
                        <td>비밀번호</td>
                        <td><input type = password name = pw size=10 maxlength=10></td>
                        </tr>
                        </table>

                        <center>
                        <input type = "submit" value="작성">
                        </center>
                        </td>
                        </tr>
                </table>
        </form>`
}