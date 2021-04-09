import React from 'react';

export function randomChoice(arr) {
    let pos = Math.floor(Math.random() * arr.length);
    return arr[pos];
}

// Функция генерирует и возвращает объект градиента
export function createGradient() {
    let colors = [
        'DeepSkyBlue',
        'DodgerBlue',
        'ForestGreen',
        'LimeGreen',
        'DarkViolet',
        'MediumVioletRed',
        'Crimson',
        'OrangeRed'
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

// Функция ищет в массиве объект с переданным ключом. Если не наход - возвращает объект по-умолчанию
export function searchData(arr, pk, defaultData) {
    for (let value of arr) {
        if (value.pk === pk) return value.data;
    }
    return defaultData;
}

// Функция получает текст и оборачивает его в элементы React, учитывая при этом теги форматирования
export function parseText(text, dedicatedClass) {
    let result = [];
    let line = text;
    let dedicatedText, anchorRef, anchorText;
    let pos = -1;
    let key = 0;
    while (pos < line.length && line !== '') {
        pos++;
        if (pos === line.length) {
            result.push(<span key={key++}>{line}</span>);
        }
        if (line[pos] === '{') {
            if (pos > 0) result.push(<span key={key++}>{line.slice(0, pos)}</span>);
            [, dedicatedText, line] = /^\{(.+?)\}(.*)/s.exec(line.slice(pos));
            result.push(<span key={key++} className={dedicatedClass}>{dedicatedText}</span>);
            pos = -1;
        }
        if (line[pos] === '[') {
            if (pos > 0) result.push(<span key={key++}>{line.slice(0, pos)}</span>);
            [, anchorRef, anchorText, line] = /^\[(.+?)\]\[(.+?)\](.*)/s.exec(line.slice(pos));
            result.push(<span key={key++}><a href={anchorRef}>{anchorText}</a></span>);
            pos = -1;
        }
    }
    return result;
}