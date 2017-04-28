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
    case REQUEST_LISTS_INDEX:
    case RECEIVE_LISTS_INDEX:
    case REQUEST_DELETE_LISTS_INDEX:
      return { ...state, ...action.payload }
    case RECEIVE_DELETE_LISTS_INDEX:
      // console.log('RECEIVE_DELETE_LISTS_INDEX state', state);
      return { ...state, lists: [...state.lists.slice(0, action.payload.deleting_list_index),...state.lists.slice(action.payload.deleting_list_index + 1)], ...action.payload }
    default:
      return state
  }
}

export default listsIndex
