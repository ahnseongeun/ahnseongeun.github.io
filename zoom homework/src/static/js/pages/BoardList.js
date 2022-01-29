function createHtml() {
    return `<h1>This is BoardList Page</h1>`;
}

export default class {
    constructor() {
        document.title = "BoardList";
    }
    async getHtml() {
        return createHtml();
    }
}
