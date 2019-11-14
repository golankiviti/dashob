import { ADD_BOARD, REMOVE_BOARD, RENAME_BOARD } from './actionTypes';
import { List, Map } from 'immutable';
import uuid from 'uuid/v4'

const initialState = List([
    Map({
        id: '1',
        webtiles: [],
        name: 'lol'
    })
])
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BOARD:
            const newBoard = Map({
                name: 'New Board',
                webtiles: List(),
                id: uuid()
            });

            return state.push(newBoard);
        case REMOVE_BOARD:
            return state.delete(action.index);
        case RENAME_BOARD:
            return state.updateIn([action.index, 'name'], x => action.name)
        default:
            return state;
    }
}