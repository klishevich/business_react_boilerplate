import {
  INVALIDATE_LISTS_INDEX,
  REQUEST_LISTS_INDEX,
  RECEIVE_LISTS_INDEX,
  REQUEST_DELETE_LISTS_INDEX,
  RECEIVE_DELETE_LISTS_INDEX,
} from '../actions/listsIndex'

function listsIndex(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_LISTS_INDEX:
      return { ...state, didInvalidate: true }
    case REQUEST_LISTS_INDEX:
      return { ...state, isFetching: true, didInvalidate: false }
    case RECEIVE_LISTS_INDEX:
      return { ...state, isFetching: false, didInvalidate: false, ...action.payload }
    default:
      return state
  }
}

export default listsIndex
