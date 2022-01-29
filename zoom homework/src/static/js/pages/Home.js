function createHtml() {
    return `<h1> This is Home Page</h1>`;
}

export default class {
    constructor() {
        document.title = "Home";
    }
    async getHtml() {
        return createHtml();
    }

}
