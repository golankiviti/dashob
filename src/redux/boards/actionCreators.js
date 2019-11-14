import {
    ADD_BOARD,
    REMOVE_BOARD,
    RENAME_BOARD
} from './actionTypes';

export const addBoard = () => ({
    type: ADD_BOARD
});

export const removeBoard = index => ({
    type: REMOVE_BOARD,
    index
});

export const renameBoard = (index, name) => ({
    type: RENAME_BOARD,
    index,
    name
});