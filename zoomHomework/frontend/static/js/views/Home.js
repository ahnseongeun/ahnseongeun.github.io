import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }
    async getHtml() {
        return createHtml();
    }
}

function createHtml() {
    return `<h1>This is My HomePage</h1>`;
}
