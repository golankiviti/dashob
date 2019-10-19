import {
    ADD_TAB,
    REMOVE_TAB,
    RENAME_TAB
} from './actionTypes';

export const addTab = () => ({
    type: ADD_TAB
});

export const removeTab = index => ({
    type: REMOVE_TAB,
    index
});

export const renameTab = (index, name) => ({
    type: RENAME_TAB,
    index,
    name
});