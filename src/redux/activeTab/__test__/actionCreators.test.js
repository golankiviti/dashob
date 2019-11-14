import { CHANGE_INDEX } from '../actionTypes'
import { changeIndex } from '../actionCreators'

describe('chaneIndex action creators', () => {
    it('CHANGE_INDEX - changes the index of the active tab', () => {
        const actual = changeIndex(2)
        const expected = {
            type: CHANGE_INDEX,
            index: 2
        }

        expect(actual).toEqual(expected)
    })
})
