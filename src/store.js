import {createStore} from 'redux';

// Я использую Redux для сохранения состояния некоторых компонентов между их размонтированием и повторным монтированием

// Типы action'ов
const SAVE_PRINTABLE_PHRASE_DATA = 'SAVE_PRINTABLE_PHRASE_DATA';
const SAVE_HEADER_COVER_DATA = 'SAVE_HEADER_COVER_DATA';
const SAVE_SIMPLE_BUTTON_DATA = 'SAVE_SIMPLE_BUTTON_DATA';

// Наименования полей в хранилище
export const PRINTABLE_PHRASE_DATA_FIELD = 'printablePhraseData';
export const HEADER_COVER_DATA_FIELD = 'headerCoverData';
export const SIMPLE_BUTTON_DATA_FIELD = 'simpleButtonData';

// Объект для быстрого сопоставления типа action и наименования поля в хранилище
let selector = {
    [SAVE_PRINTABLE_PHRASE_DATA]: PRINTABLE_PHRASE_DATA_FIELD,
    [SAVE_HEADER_COVER_DATA]: HEADER_COVER_DATA_FIELD,
    [SAVE_SIMPLE_BUTTON_DATA]: SIMPLE_BUTTON_DATA_FIELD
}

function replaceOrAdd(arr, pk, data) {
    let updateFlag = false;
    let result = arr.map(value => {
        if (value.pk === pk) {
            updateFlag = true;
            return {pk, data};
        }
        return value
    });
    if (updateFlag) return result;
    return [...result, {pk, data}];
}

function reducer(state, action) {
    let fieldName = selector[action.type];
    if (!fieldName) return state;
    return {...state, [fieldName]: replaceOrAdd(state[fieldName], action.pk, action.data)}
}

const initialState = {
    [PRINTABLE_PHRASE_DATA_FIELD]: [],
    [HEADER_COVER_DATA_FIELD]: [],
    [SIMPLE_BUTTON_DATA_FIELD]: []
}

export const store = createStore(reducer, initialState);

// Блок создателей действий
function createSaveDataAction(actionType, pk, data) {
    return {type: actionType, pk, data};
}

export function createSavePrintablePhraseAction(pk, data) {
    return createSaveDataAction(SAVE_PRINTABLE_PHRASE_DATA, pk, data);
}

export function createSaveHeaderCoverAction(pk, data) {
    return createSaveDataAction(SAVE_HEADER_COVER_DATA, pk, data);
}

export function createSaveSimpleButtonAction(pk, data) {
    return createSaveDataAction(SAVE_SIMPLE_BUTTON_DATA, pk, data);
}