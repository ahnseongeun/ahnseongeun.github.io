import ajax from '../ajax.js'
import AbstractView from "./AbstractView.js";
import { navigateTo } from '../router/router.js';


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("BoardList");
    }
    async getHtml() {
        return createHtml();
    }
}

function createHtml() {
    return `
        <h1>This is BoardList Page</h1>
    `;
}
