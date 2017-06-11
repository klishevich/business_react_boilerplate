import {
  REQUEST_CREATE_LIST,
  RECEIVE_CREATE_LIST,
  CHANGE_LIST_NEW_FIELD,
  CLEAR_LIST_NEW,
} from './actions';

import { CLEAR_FLASH_MESSAGE } from '../ListEditPageContainer/actions';

const initialState = {
  list: { name: '', last_name: '', first_name: '', order: 0, birth_date: '', is_alive: true },
};

function listNewPageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_LIST:
    case RECEIVE_CREATE_LIST:
    case CLEAR_FLASH_MESSAGE:
      return { ...state, ...action.payload };
    case CHANGE_LIST_NEW_FIELD:
      return { ...state, ...action.payload, list: { ...state.list, ...action.payload.list } };
    case CLEAR_LIST_NEW:
      return { ...state, ...action.payload, list: { ...state.list, ...initialState.list } };
    default:
      return state;
  }
}

export default listNewPageReducer;
