import { ADD_TAB, REMOVE_TAB, RENAME_TAB } from './actionTypes';
import { List, Map } from 'immutable';

export default function reducer(state = List(), action) {
    switch (action.type) {
        case ADD_TAB:
            const newTab = Map({
                name: 'New Tab',
                webtiles: List()
            });

            return state.push(newTab);
        case REMOVE_TAB:
            return state.delete(action.index);
        case RENAME_TAB:
            return state.updateIn([action.index, 'name'], x => action.name)
        default:
            return state;
    }
}