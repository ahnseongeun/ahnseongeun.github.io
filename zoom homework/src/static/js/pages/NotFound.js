function createHtml() {
    return `<h1>404 Not found</h1>`;
}

export default class {
    constructor() {
        document.title = "404 Not found";
    }
    async getHtml() {
        return createHtml();
    }
}