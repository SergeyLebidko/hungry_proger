import {createStore} from 'redux';

// Я использую Redux для сохранения состояния некоторых компонентов между их размонтированием и повторным монтированием

const ADD_DATA = 'add_data';

function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_DATA:
            return Object.assign({...state}, {[action.pk]: action.data});
        default:
            return state
    }
}

export const store = createStore(reducer);

export const mapStateToProps = state => ({storedData: state});
export const mapDispatchToProps = dispatch => ({setData: (pk, data) => dispatch({type: ADD_DATA, pk, data})});