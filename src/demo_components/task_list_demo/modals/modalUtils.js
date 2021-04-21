export class ErrorController {
    constructor(errorSetter) {
        this.errorSetter = errorSetter;
        this.timer = null;
    }

    showError(text) {
        this.stopTimer();
        this.errorSetter(text);
        this.timer = setTimeout(() => this.errorSetter(null), 3000);
    }

    // Метод нужен для предотвращения попытки обновления уже размонтированного компонента
    stopTimer(){
        clearTimeout(this.timer);
    }
}