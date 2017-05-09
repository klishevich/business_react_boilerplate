import {
  INVALIDATE_LISTS,
  REQUEST_LISTS,
  RECEIVE_LISTS,
  REQUEST_DELETE_LIST,
  RECEIVE_DELETE_LIST,
} from './actions';

function listsIndex(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_LISTS:
    case REQUEST_LISTS:
    case RECEIVE_LISTS:
    case REQUEST_DELETE_LIST:
      return { ...state, ...action.payload };
    case RECEIVE_DELETE_LIST:
      // console.log('RECEIVE_DELETE_LIST state', state);
      return { ...state,
        lists: [...state.lists.slice(0, action.payload.deleting_list_index),
          ...state.lists.slice(action.payload.deleting_list_index + 1)],
        ...action.payload };
    default:
      return state;
  }
}

export default listsIndex;
