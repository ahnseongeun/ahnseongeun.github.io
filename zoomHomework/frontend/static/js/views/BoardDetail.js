function createHtml() {
    return `<h1>This is BoardDetail Page</h1>`;
}

export default class {
    constructor() {
        document.title = "BoardDetail";
    }
    async getHtml() {
        return createHtml();
    }
}
