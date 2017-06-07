import {
  REQUEST_CREATE_LIST,
  RECEIVE_CREATE_LIST,
  CLEAR_FLASH_MESSAGE,
  CHANGE_LIST_NEW_FIELD,
} from './actions';

function listCreatePageReducer(state = { }, action) {
  switch (action.type) {
    case REQUEST_CREATE_LIST:
    case RECEIVE_CREATE_LIST:
    case CLEAR_FLASH_MESSAGE:
      return { ...state, ...action.payload };
    case CHANGE_LIST_NEW_FIELD:
      return { ...state, ...action.payload, list: { ...state.list, ...action.payload.list } };
    default:
      return state;
  }
}

export default listCreatePageReducer;
