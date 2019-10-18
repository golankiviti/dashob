import { ADD_TAB } from './actions';
import { List, Map } from 'immutable';

export default function reducer(state = List(), action) {
    switch (action.type) {
        case ADD_TAB:
            const a = List
            debugger
            return state.push(Map({name: 'tab'}));
        default:
            return state;
    }
}