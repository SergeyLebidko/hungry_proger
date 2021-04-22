export class ErrorController {
    constructor(errorSetter, deniedList) {
        this.errorSetter = errorSetter;
        this.deniedList = deniedList;
        this.timer = null;
    }

    checkError(value) {
        this.stopTimer();
        if (value.length === 0) {
            this.errorSetter('Название не может быть пустым');
            this.timer = setTimeout(() => this.errorSetter(null), 3000);
            return true;
        }

        for (let deniedValue of this.deniedList) {
            if (deniedValue === value) {
                this.errorSetter('Такое название уже используется');
                this.timer = setTimeout(() => this.errorSetter(null), 3000);
                return true;
            }
        }
        return false;
    }

    // Метод нужен для предотвращения попытки обновления уже размонтированного компонента
    stopTimer() {
        clearTimeout(this.timer);
    }
}

export function getCategoryTitles(categoryList) {
    let result = [];
    for (let category of categoryList) result.push(category.title);
    return result;
}

export function getTaskTitles(categoryList) {
    let result = [];
    for (let category of categoryList) {
        for (let task of category.taskList) result.push(task.title);
    }
    return result;
}