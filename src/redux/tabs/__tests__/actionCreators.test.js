import { ADD_TAB, REMOVE_TAB, RENAME_TAB } from '../actionTypes';
import { addTab, removeTab, renameTab } from '../actionCreators';

describe('Tabs action creators', () => {
    it('addTab - creates an ADD_TAB action', () => {
        const expected = {
            type: ADD_TAB
        }
        const actual = addTab()

        expect(actual).toEqual(expected)
    });

    it('removeTab - creates a REMOVE_TAB action', () => {
        const index = 0;
        const expected = {
            type: REMOVE_TAB,
            index
        }
        const actual = removeTab(index)

        expect(actual).toEqual(expected)
    });

    it('renameTab - creates a RENAME_TAB action', () => {
        const index = 0;
        const name = 'Golan';
        const expected = {
            type: RENAME_TAB,
            index,
            name
        }
        const actual = renameTab(index, name)

        expect(actual).toEqual(expected)
    });
})