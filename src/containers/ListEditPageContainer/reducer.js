import {
  REQUEST_LIST,
  RECEIVE_LIST,
} from './actions';

function listEditPageReducer(state = { }, action) {
  switch (action.type) {
    case REQUEST_LIST:
    case RECEIVE_LIST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default listEditPageReducer;
