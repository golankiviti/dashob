import { CHANGE_INDEX } from './actionTypes'

export default function reducer(state = 0, action) {
    switch(action.type) {
        case CHANGE_INDEX:
            return action.index
        default:
            return state
    }
}