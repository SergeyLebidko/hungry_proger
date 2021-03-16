export function randomChoice(arr) {
    let pos = Math.floor(Math.random() * arr.length);
    return arr[pos];
}

export function createGradient() {
    let colors = [
        'LightSkyBlue',
        'LightPink',
        'PaleGreen',
        'Turquoise',
        'DarkOrchid',
        'GreenYellow',
        'LightSalmon',
        'Cyan',
        'Violet',
        'DeepSkyBlue',
        'OrangeRed',
        'SlateBlue',
        'LightSlateGray'

    ];
    let horizontalPositions = ['left', 'right'];
    let verticalPositions = ['top', 'bottom'];

    let color1, color2;
    color1 = color2 = null;
    while (color1 === color2) {
        color1 = randomChoice(colors);
        color2 = randomChoice(colors);
    }
    let hPos = randomChoice(horizontalPositions);
    let vPos = randomChoice(verticalPositions)

    return {backgroundImage: `linear-gradient(to ${hPos} ${vPos}, ${color1}, ${color2})`}
}

export function textParser(text) {
    let [headerText, bodyText] = text.split('###');
    if (headerText && headerText.length > 0) {
        headerText = headerText.split('***');
    } else {
        headerText = [];
    }
    if (bodyText && bodyText.length > 0) {
        bodyText = bodyText.split('***');
    } else {
        bodyText = [];
    }
    return {headerText, bodyText}
}