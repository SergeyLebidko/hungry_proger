export class ErrorController {
    constructor(errorSetter) {
        this.errorSetter = errorSetter;
        this.timer = null;
    }

    showError(text) {
        clearTimeout(this.timer);
        this.errorSetter(text);
        this.timer = setTimeout(() => this.errorSetter(null), 3000);
    }
}