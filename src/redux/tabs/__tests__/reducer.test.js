import reducer from '../reducer';
import { addTab, removeTab, renameTab } from '../actionCreators';
import { List, fromJS } from 'immutable';

describe('tabsReducer', () => {
    describe('ADD_TAB', () => {
        it('Adds a new tab with a default name - "New Tab"', () => {
            const state = List()
            const newState = reducer(state, addTab())

            const expected = 'New Tab';
            const actual = newState.getIn([0, 'name']);

            expect(actual).toEqual(expected)
        });

        it('Adds a new tab with an empty list of webtiles', () => {
            const state = List()
            const newState = reducer(state, addTab())

            const expected = List();
            const actual = newState.getIn([0, 'webtiles']);

            expect(actual).toEqual(expected)
        })
    })

    describe('REMOVE_TAB', () => {
        it('Removes the tab', () => {
            const remainingTabName = 'New Tab'
            const initialState = fromJS([
                {
                    name: 'Golan',
                    webtiles: []
                },
                {
                    name: remainingTabName,
                    webtiles: []
                }
            ]);
            const newState = reducer(initialState, removeTab(0))

            const actual = newState.getIn([0, 'name'])
            const expected = remainingTabName;

            expect(newState.size).toEqual(1)
            expect(actual).toEqual(expected)
        })
    })

    describe('RENAME_TAB', () => {
        it('Changes the name of the tab to the name in the action', () => {
            const state = fromJS([
                {
                    name: 'New Tab',
                    webtiles: []
                }
            ]);
            const newName = 'Golan';
            const newState = reducer(state, renameTab(0, newName));

            const expected = newName;
            const actual = newState.getIn([0, 'name']);

            expect(actual).toEqual(expected)
        })
    })
    
})