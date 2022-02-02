function createHtml() {
    return `<h1> WelCome to Write Board</h1>`;
}

export default class {
    constructor() {
        document.title = "WriteBoard";
    }
    async getHtml() {
        return createHtml();
    }

}
