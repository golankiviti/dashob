import { changeIndex } from '../actionCreators'
import reducer from '../reducer'

describe('activeTab reducer', () => {
    it('CHANGE_INDEX - changes the activeIndex value to the index from the action', () => {
        const state = null
        const newIndex = 2

        const actual = reducer(state, changeIndex(newIndex))
        const expected = newIndex

        expect(actual).toEqual(expected)
    })
})