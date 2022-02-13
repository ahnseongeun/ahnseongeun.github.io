export default class AbstractView{
    constructor(params) {
        this.params = params;
        const date = new Date();
        this.convertDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours() + 1}:${date.getMinutes()}`;
    }

    setTitle(title) {
        document.title = title;
    }

    attactEvent() {

    }
    
    async getHtml() {
        return "";
    }
}