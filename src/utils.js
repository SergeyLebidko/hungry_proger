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
        color1 = this.randomChoice(colors);
        color2 = this.randomChoice(colors);
    }
    let hPos = this.randomChoice(horizontalPositions);
    let vPos = this.randomChoice(verticalPositions)

    return {backgroundImage: `linear-gradient(to ${hPos} ${vPos}, ${color1}, ${color2})`}
}