import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }
    async getHtml() {
        return createHtml();
    }
}

function createHtml() {
    return `<h1>This is My HomePage</h1>`;
}
