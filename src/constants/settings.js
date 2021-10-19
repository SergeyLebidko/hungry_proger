export const GITHUB_HREF = 'https://github.com/SergeyLebidko';
export const MAIL_HREF = 'mailto:sergeyler@gmail.com';
export const TELEGRAM_HREF = 'tg://resolve?domain=@sergeyler';

export const RESUME_HREF = 'https://krasnodar.hh.ru/resume/7a068d12ff072536a70039ed1f514b58767550';

export const MAIN_MODE = 'mm';
export const ABOUT_MODE = 'am';
export const SKILLS_MODE = 'sm';
export const PROJECTS_MODE = 'pm';

export const SLIDE_TIMEOUT = 500;

export const L_COLORS = 'lc';
export const D_COLORS = 'dc';

class ColorController {
    constructor() {
        this.data = {
            [L_COLORS]: {
                '--accent': 'orangered',                                 // Цветовой акцент
                '--back1': 'whitesmoke',                                 // Основной цвет фона
                '--back2': 'white',                                      // Дополнительный цвет фона
                '--text-color': 'black',                                 // Цвет текста
                '--border-color': 'black',                               // Цвет границ
                '--separator': 'lightgrey',                              // Цвет разделителей
                '--icon-color': 'rgb(100, 100, 100)',                    // Цвет иконок до наведения
                '--button-shadow': '0 2px 5px 0 rgba(0, 0, 0, 0.3)',     // Пресет теней для кнопок
                '--card-shadow': '0 3px 10px 0 rgba(0, 0, 0, 0.15)',     // Пресет теней для карточек
                '--thumb-color': 'lightgray',                            // Цвет скролла
                '--thumb-hover-color': 'gray'                            // Цвет скролла при наведении на компонент
            },
            [D_COLORS]: {
                '--accent': 'orangered',
                '--back1': 'rgb(60, 60, 70)',
                '--back2': 'rgb(80, 80, 90)',
                '--text-color': 'white',
                '--border-color': 'white',
                '--separator': 'dimgray',
                '--icon-color': 'rgb(240, 240, 240)',
                '--button-shadow': '0 5px 10px 0 rgba(0, 0, 0, 0.6)',
                '--card-shadow': '0 3px 10px 0 rgba(0, 0, 0, 0.8)',
                '--thumb-color': 'rgb(90, 90, 100)',
                '--thumb-hover-color': 'gray'
            }
        }
    }

    set theme(preset) {
        this.preset = preset;
        const root = document.documentElement;
        for (const key of Object.keys(this.data[preset])) root.style.setProperty(key, this.data[preset][key]);
    }

    get theme() {
        return this.preset;
    }
}

export const colorController = new ColorController();