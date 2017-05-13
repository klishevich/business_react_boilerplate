import {
  REQUEST_LIST,
  RECEIVE_LIST,
  CHANGE_LIST_FIELD,
  REQUEST_PATCH_LIST,
  RECEIVE_PATCH_LIST,
  CLEAR_FLASH_MESSAGE,
} from './actions';

function listEditPageReducer(state = { }, action) {
  switch (action.type) {
    case REQUEST_LIST:
    case RECEIVE_LIST:
    case REQUEST_PATCH_LIST:
    case RECEIVE_PATCH_LIST:
    case CLEAR_FLASH_MESSAGE:
      return { ...state, ...action.payload };
    case CHANGE_LIST_FIELD:
      return { ...state, ...action.payload, list: { ...state.list, ...action.payload.list } };
    default:
      return state;
  }
}

export default listEditPageReducer;
