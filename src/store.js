import {combineReducers, createStore} from "redux";

export const SAVE = 'save';

export function actionCreator(pk, data) {
    return {type: SAVE, pk, data}
}

function reducer(state, action) {
    let {type, pk, data} = action;
    switch (type) {
        case SAVE: {
            let find = false;
            let result = state.map(value => {
                if (value.pk === pk) {
                    find = true;
                    return {pk, data}
                }
                return value;
            });
            if (!find) return [...result, {pk, data}]
            return result;
        }
        default:
            return state;
    }
}

function printablePhraseData(state = [], action) {
    reducer(state, action);
}

function simpleButtonData(state = [], action) {
    reducer(state, action);
}

function headerCoverData(state = [], action) {
    reducer(state, action);
}

export const store = createStore(combineReducers({printablePhraseData, simpleButtonData, headerCoverData}));
