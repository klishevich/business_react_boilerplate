import {
  REQUEST_LIST,
  RECEIVE_LIST,
  CHANGE_LIST_FIELD,
} from './actions';

function listEditPageReducer(state = { }, action) {
  switch (action.type) {
    case REQUEST_LIST:
    case RECEIVE_LIST:
      return { ...state, ...action.payload };
    case CHANGE_LIST_FIELD:
      return { ...state, ...action.payload, list: { ...state.list, ...action.payload.list } };
    default:
      return state;
  }
}

export default listEditPageReducer;
