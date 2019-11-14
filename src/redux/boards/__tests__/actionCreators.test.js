import { ADD_BOARD, REMOVE_BOARD, RENAME_BOARD } from '../actionTypes';
import { addBoard, removeBoard, renameBoard } from '../actionCreators';

describe('Boards action creators', () => {
    it('addBoard - creates an ADD_BOARD action', () => {
        const expected = {
            type: ADD_BOARD
        }
        const actual = addBoard()

        expect(actual).toEqual(expected)
    });

    it('removeBoard - creates a REMOVE_BOARD action', () => {
        const index = 0;
        const expected = {
            type: REMOVE_BOARD,
            index
        }
        const actual = removeBoard(index)

        expect(actual).toEqual(expected)
    });

    it('renameBoard - creates a RENAME_BOARD action', () => {
        const index = 0;
        const name = 'Golan';
        const expected = {
            type: RENAME_BOARD,
            index,
            name
        }
        const actual = renameBoard(index, name)

        expect(actual).toEqual(expected)
    });
})